import { readdirSync } from 'fs';
import { resolve } from 'path';


const args = process.argv.slice(2);
const dirPath = args.length > 0 ? args[0] : '.';

try {
    const absolutePath = resolve(dirPath);
    const entries = readdirSync(absolutePath);

    const numberOfEntries = entries.length;
    console.log(numberOfEntries);
} catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    process.exit(1);
}
