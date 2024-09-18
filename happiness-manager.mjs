import { readdir, readFile, stat, writeFile } from "fs/promises";
import { existsSync } from "fs";

const guest_dir = process.argv[2] ?? './guests';
const file_shopping_list = process.argv[3] ?? 'shopping-list.json';

let drinkWishers = {
    beer: 0,
    wine: 0,
    water: 0,
    soft: 0,
}
    , foodWishers = {
        eggplants: 0,
        mushrooms: 0,
        hummus: 0,
        courgettes: 0,
        burgers: 0,
        sardines: 0,
        kebabs: 0,
        potatoes: 0,
    }
    , guestsCounter = 0



const handle_guests = (guestInfo) => {
    if (guestInfo.answer === 'yes') {
        guestsCounter++;
        foodWishers.potatoes++;
        if (guestInfo.drink) {
            drinkWishers[guestInfo.drink]++;
        }
        switch (guestInfo.food) {
            case 'veggie':
            case 'vegan':
                foodWishers.mushrooms += 3;
                foodWishers.eggplants++;
                foodWishers.hummus++;
                foodWishers.courgettes++;
                break;
            case 'carnivore':
                foodWishers.burgers++;
                break;
            case 'fish':
                foodWishers.sardines++;
                break;
            case 'everything':
                foodWishers.kebabs++;
                break;
        }
    }
}


let shoppingList = {};
if (existsSync(file_shopping_list)) {
    shoppingList = await readFile(file_shopping_list)
        .then((content) => content.length > 0 ? JSON.parse(content) : {})
        .catch((err) => {
            console.error(new Error(`fail parsing shopping list in ${file_shopping_list}: ${err}\n a new list will be created`));
        });
}


const filenames = (await readdir(guest_dir)).filter(filename => filename.endsWith('.json'));
const guests_handler = filenames.map(
    fileName => readFile(`${guest_dir}/${fileName}`)
        .then((content) => JSON.parse(content))
        .then(handle_guests)
);
await Promise.all(guests_handler);

if (!guestsCounter) {
    console.log('No one is coming.');
    process.exit(0);
}

if (!shoppingList) {
    process.exit(0);
}


if (drinkWishers.beer) {
    shoppingList['6-packs-beers'] = Math.ceil(drinkWishers.beer / 6);
}
for (let product of ['water', 'wine', 'soft']) {
    if (drinkWishers[product]) {
        shoppingList[`${product}-bottles`] = Math.ceil(drinkWishers[product] / 4);
    }
}

for (let product of ['eggplants', 'mushrooms', 'hummus', 'courgettes']) {
    if (foodWishers[product]) {
        shoppingList[product] = Math.ceil(foodWishers[product] / 3);
    }
}
for (let product of ['burgers', 'sardines', 'kebabs', 'potatoes']) {
    if (foodWishers[product]) {
        shoppingList[product] = Math.ceil(foodWishers[product]);
    }
}

await writeFile(file_shopping_list, JSON.stringify(shoppingList));

