import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const sendJSONResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

const server = createServer(async (req, res) => {
    if (req.method === 'POST') {
        const guestName = req.url.slice(1);
        if (!guestName) {
            sendJSONResponse(res, 400, { error: 'Bad Request: Missing guest name in URL' });
            return;
        }
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                let guestDetails;
                try {
                    guestDetails = JSON.parse(body);
                } catch (parseError) {
                    sendJSONResponse(res, 400, { error: 'Bad Request: Invalid JSON format' });
                    return;
                }
                const filePath = join(process.cwd(), `${guestName}.json`);
                await writeFile(filePath, JSON.stringify(guestDetails, null, 2), 'utf-8');
                sendJSONResponse(res, 201, { message: 'Guest added/updated successfully', guestName, guestDetails });
            } catch (error) {
                sendJSONResponse(res, 500, { error: 'server failed' });
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});
const port = 5000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});