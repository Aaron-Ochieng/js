import { readdir } from 'fs/promises';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';

// Helper function to process guest name from the filename
const processGuestName = (filename) => {
    const nameParts = filename.slice(0, -5).split('_');  // Remove '.json' and split by '_'
    return [nameParts[0], nameParts[1]]; // [firstName, lastName]
};

// Helper function to sort guest names
const sortGuests = (guests) => {
    return guests.sort((a, b) => {
        const lastNameComparison = a[1].localeCompare(b[1]);
        return lastNameComparison !== 0 ? lastNameComparison : a[0].localeCompare(b[0]);
    });
};

// Helper function to format the guest list
const formatGuestList = (guests) => {
    return guests.map((guest, index) => {
        return `${index + 1}. ${guest[1]} ${guest[0]}`;
    }).join('\n');
};

function filter_files_by_answer_yes(dir_path, files) {
    const validFiles = [];

    files = files.filter(file => file.endsWith('.json')); 

    files.forEach(filename => {
        try {
            const filePath = join(dir_path, filename);
            const fileContent = readFileSync(filePath, 'utf-8');
            const parsedContent = JSON.parse(fileContent);

            if (parsedContent.answer === "yes") {
                validFiles.push(filename);
            }
        } catch (error) {
            console.error(`Error processing file ${filename}: ${error.message}`);
        }
    });

    return validFiles;
}

async function main() {
    const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

    try {
        const files = await readdir(dirPath);
        const validFiles = filter_files_by_answer_yes(dirPath, files);
        const guestNames = validFiles.map(processGuestName);
        const sortedGuests = sortGuests(guestNames);
        const formattedList = formatGuestList(sortedGuests);
        writeFileSync("vip.txt", formattedList, 'utf-8');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Execute the main function and handle unhandled errors
main().catch(error => {
    console.error(`Unhandled error: ${error.message}`);
    process.exit(1);
});
