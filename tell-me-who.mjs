// tell-me-who.mjs

import { promises as fs } from 'fs';
import { resolve } from 'path';


const args = process.argv.slice(2);
const dirPath = args.length > 0 ? args[0] : '.';

try {
    const absolutePath = resolve(dirPath);
    const files = await fs.readdir(absolutePath);

    const guests = files.map(file => {
        const [lastname, firstnameWithExt] = file.split('_');
        const firstname = firstnameWithExt.split('.')[0]; 
        return {
            lastname: capitalizeFirstLetter(lastname),
            firstname: capitalizeFirstLetter(firstname)
        };
    });

    guests.sort((a, b) => {
        if (a.lastname < b.lastname) return -1;
        if (a.lastname > b.lastname) return 1;
        return a.firstname.localeCompare(b.firstname);
    });

    guests.forEach((guest, index) => {
        console.log(`${index + 1}. ${guest.lastname} ${guest.firstname}`);
    });
} catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    process.exit(1);
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


