// uninvited.mjs
import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';

// Define the port
const PORT = 5000;
const GUESTS_DIR = path.join(process.cwd(), 'guests');

// Create the guests directory if it doesn't exist
await fs.mkdir(GUESTS_DIR, { recursive: true });

// Create an HTTP server
const server = http.createServer(async (req, res) => {
    const guestName = req.url.slice(1); // Remove the leading '/'

    if (req.method === 'POST') {
        if (!guestName) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'A guest name is required.' }));
        }

        // Get the request body
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                // Parse the body as JSON
                const guestData = JSON.parse(body);

                // Define the path for the guest file
                const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

                // Write guest data to the JSON file (overwriting if it exists)
                await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

                // Respond with the guest data
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (error) {
                console.error('Error processing request:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });

        req.on('error', (error) => {
            console.error('Request error:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});