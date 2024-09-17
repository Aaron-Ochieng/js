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
            lastname,
            firstname
        };
    });

    guests.sort((a, b) => {
        const isANumeric = /^\d/.test(a.lastname); // Check if a.lastname starts with a number
        const isBNumeric = /^\d/.test(b.lastname); // Check if b.lastname starts with a number

        if (isANumeric && !isBNumeric) return -1; // 'a' starts with number, so it should come first
        if (!isANumeric && isBNumeric) return 1;  // 'b' starts with number, so it should come first

        // If both are numeric or both are not numeric, apply normal sorting
        if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
        if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
        return a.firstname.toLowerCase().localeCompare(b.firstname.toLowerCase());
    });

    guests.forEach((guest, index) => {
        console.log(`${index + 1}. ${guest.lastname} ${guest.firstname}`);
    });
} catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    process.exit(1);
}