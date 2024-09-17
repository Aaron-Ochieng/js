import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const main = () => {
    const filePath = process.argv[2];
    const action = process.argv[3];
    const outputFileName = process.argv[4] || null;

    if (!filePath || !action) {
        console.error("Usage: node tell-it-cypher.mjs <file-path> <encode|decode> [output-file]");
        process.exit(1);
    }

    const resolvedFilePath = resolve(filePath);

    try {
        // Read the input file
        const fileContent = readFileSync(resolvedFilePath, 'utf-8');

        let result;
        let outputFile;

        if (action === 'encode') {
            // Encode the file content to base64
            result = Buffer.from(fileContent, 'utf-8').toString('base64');
            outputFile = outputFileName || 'cypher.txt';
        } else if (action === 'decode') {
            // Decode the base64 content
            result = Buffer.from(fileContent, 'base64').toString('utf-8');
            outputFile = outputFileName || 'clear.txt';
        } else {
            console.error("Invalid action. Use 'encode' or 'decode'.");
            process.exit(1);
        }

        // Write the result to the output file
        writeFileSync(resolve(outputFile), result, 'utf-8');
        console.log(`Operation successful. Output written to ${outputFile}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};


main();
