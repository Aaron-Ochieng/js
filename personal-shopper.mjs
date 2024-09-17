import { readFile, writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';

// Helper function to print the list
const printList = (list) => {
    if (Object.keys(list).length === 0) {
        console.log('Empty list.');
    } else {
        for (const [item, count] of Object.entries(list)) {
            console.log(`- ${item} (${count})`);
        }
    }
};

// Helper function to print the help message
const printHelp = () => {
    console.log(`Commands:
- create: takes a filename as argument and creates it (should have .json extension specified)
- delete: takes a filename as argument and deletes it
- add: add a new element to the list (optional quantity)
- rm: remove an element from the list (optional quantity)
- ls: prints the list
- help: shows this help message`);
};

// Function to load the list from the file
const loadList = async (filename) => {
    if (!existsSync(filename)) return {};
    const data = await readFile(filename, 'utf-8');
    return JSON.parse(data);
};

// Function to save the list to the file
const saveList = async (filename, list) => {
    await writeFile(filename, JSON.stringify(list, null, 2), 'utf-8');
};

const main = async () => {
    const [, , filename, command, elem, quantity] = process.argv;

    if (!filename || !filename.endsWith('.json')) {
        console.error('Please provide a valid .json file.');
        return;
    }

    let list = await loadList(filename);
    switch (command) {
        case 'create':
            if (existsSync(filename)) {
                console.log(`${filename} already exists.`);
            } else {
                await saveList(filename, {});
                console.log(`Created ${filename}.`);
            }
            break;

        case 'delete':
            if (existsSync(filename)) {
                await unlink(filename);
                console.log(`Deleted ${filename}.`);
            } else {
                console.log(`${filename} does not exist.`);
            }
            break;

        case 'add':
            if (!elem) {
                console.error('No elem specified.');
                return;
            }
            let qtyToAdd = isNaN(quantity) ? 1 : parseInt(quantity);
            list[elem] = (list[elem] || 0) + qtyToAdd;
            if (list[elem] <= 0) {
                delete list[elem];
            }
            await saveList(filename, list);
            console.log(`Added/Updated ${elem} (${list[elem] || 0}) to the list.`);
            break;

        case 'rm':
            if (!elem) {
                console.error('No elem specified.');
                return;
            }
            if (!list[elem]) {
                if (quantity !== undefined) {
                    let val = parseInt(quantity)
                    if (val < 0) { val = (val * -1) }
                    list[elem] = val
                    await saveList(filename, list)
                }
                console.log(`${elem} does not exist in the list.`);
                return;
            }
            if (quantity === undefined) {
                delete list[elem]
                await saveList(filename, list)
                console.log(`Removed ${elem} from the list.`);
            } else if (isNaN(quantity)) {
                console.error('Unexpected request: nothing has been removed.');
            } else {
                let qtyToRemove = isNaN(quantity) ? 1 : parseInt(quantity);
                if (qtyToRemove > 0) {
                    qtyToRemove *= -1
                }
                list[elem] = (list[elem] || 0) + qtyToRemove;
                if (list[elem] <= 0) {
                    delete list[elem];
                }
                await saveList(filename, list);
                console.log(`Removed ${qtyToRemove} from ${elem} (remaining: ${list[elem] || 0}).`);
            }
            break;

        case 'ls':
        case undefined:
            printList(list);
            break;

        case 'help':
        default:
            printHelp();
            break;
    }
};

main().catch(err => {
    console.error(`Error: ${err.message}`);
});
