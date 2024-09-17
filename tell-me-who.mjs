import { readdir } from 'fs/promises';
import { resolve } from 'path';

const process_guests = (filename) => {
    const nameParts = filename.slice(0, -5).split('_');
    return [nameParts[0], nameParts[1]];
};

const sort_guests = (guests) => {
    return guests.sort((a, b) => {
        const lastNameComparison = a[1].localeCompare(b[1]);
        return lastNameComparison !== 0 ? lastNameComparison : a[0].localeCompare(b[0]);
    });
};


const main = async () => {
    const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

    try {
        const files = await readdir(dirPath);
        const guestNames = files
            .filter(file => file.endsWith('.json'))
            .map(process_guests);

        const sortedGuests = sort_guests(guestNames);
        const formattedList = sortedGuests.map((guest, index) => {
            return `${index + 1}.${guest[1]} ${guest[0]}`;
        }).join('\n');

        console.log(formattedList);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

main().catch(error => {
    console.error(`Unhandled error: ${error.message}`);
    process.exit(1);
});