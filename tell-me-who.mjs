import { readdir } from 'fs/promises';
import { resolve } from 'path';

const processGuestName = (filename) => {
    // Remove .json extension and split into parts
    const nameParts = filename.slice(0, -5).split('_');
    // Return as [FirstName, LastName]
    return [nameParts[0], nameParts[1]];
};

const sortGuests = (guests) => {
    return guests.sort((a, b) => {
        // Compare last names first, then first names
        const lastNameComparison = a[1].localeCompare(b[1]);
        return lastNameComparison !== 0 ? lastNameComparison : a[0].localeCompare(b[0]);
    });
};

const formatGuestList = (guests) => {
    return guests.map((guest, index) => {
        return `${index + 1}. ${guest[1]} ${guest[0]}`;
    }).join('\n');
};

const main = async () => {
    const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

    try {
        const files = await readdir(dirPath);
        const guestNames = files
            .filter(file => file.endsWith('.json'))
            .map(processGuestName);

        const sortedGuests = sortGuests(guestNames);
        const formattedList = formatGuestList(sortedGuests);

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