import { readFile, writeFile, rm } from "fs/promises";

const filename = (!process.argv[2] || process.argv[2].length === 0) ? 'help' : process.argv[2];

const option = process.argv[3] ?? 'help';
const item = process.argv[4];
const numberString = process.argv[5];

async function createFile(filename) {
    await writeFile(filename, JSON.stringify({}));
}

async function removeFile(filename) {
    await rm(filename, { force: true });
}

const printShopList = async (filename) => {
    readFile(filename).then((content) => {
        try {
            let items = Object.entries(JSON.parse(content.toString()));
            if (items.length === 0) { console.log(`Empty list.`); return; }
            let listOutputForm = items.reduce((resStr, [name, quantity]) => `${resStr}- ${name} (${quantity})\n`, '');
            console.log(listOutputForm)
        } catch (e) { console.error('Invalide format of the list: ' + e.message); }
    }).catch(e => console.error('Cannot read list: ' + e.message));
}
const removeItem = async (filename, item, number) => {
    readFile(filename)
        .then((content) => {
            let items = JSON.parse(content);
            if (!items[item]) return false;
            if (items[item] <= number) {
                delete items[item];
            } else {
                items[item] -= number;
            }
            return items;

        })
        .then((items) => {
            if (items !== false) {
                writeFile(filename, JSON.stringify(items));
            }
        })
        .catch((e) => { console.error('Invalide format of the list: ' + e.message); });
}
const addItem = async (filename, item, number) => {
    readFile(filename)
        .then((content) => {
            if (content.length === 0) { return { [item]: number } }
            let items = JSON.parse(content);
            if (!items[item]) { items[item] = number; return items; }
            items[item] += number;
            return items;
        })
        .then((items) => { writeFile(filename, JSON.stringify(items)); })
        .catch((e) => { console.error('Invalide format of the list: ' + e.message); });
}




function printHelp() {
    console.log(
        ` Commands:
- create: takes a filename as argument and create it (should have '.json' extension specified)
- delete: takes a filename as argument and delete it
- ls: takes a filename as argument and print a list from the file in the console
- add: add a new element to the list in the file; takes a number as element's quantity, default: 1
- rm: decrease a given quantity of the element on the list in the file, if no quantity is specified it will remove the element from the list
- help: print this message`
    )
}


if (filename == 'help' || option == 'help') { printHelp(); process.exit(); }

let number = parseInt(numberString);
switch (option) {
    case 'create': await createFile(filename); break;
    case 'delete': await removeFile(filename); break;
    case 'ls': await printShopList(filename); break;
    case 'add':
        if (!item) {
            console.error('No elem specified.');
            break;
        }
        if (!number) number = 1;
        if (number < 0) {
            await removeItem(filename, item, -number)
        } else {
            await addItem(filename, item, number);
        }
        break;
    case 'rm':
        if (!item) {
            console.error('No elem specified.');
            break;
        }
        if (numberString === undefined) {
            await removeItem(filename, item, Infinity);
            break;
        }
        if (isNaN(number)) { console.error('Unexpected request: nothing has been removed'); break }
        if (number < 0) { await addItem(filename, item, -number) } else { await removeItem(filename, item, number); }
        break;
    default: console.error('Invalid option: ' + option);
}