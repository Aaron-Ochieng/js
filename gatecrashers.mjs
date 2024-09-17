import http from 'http'
import fs from 'fs'
import url from 'url'
import path from 'path'
const PORT = 5000;

const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

// Helper function to handle authentication
const authenticate = (authHeader) => {
    if (!authHeader) return false;
    const auth = authHeader.split(' ')[1];
    const [username, password] = Buffer.from(auth, 'base64').toString('utf-8').split(':');
    return authorizedUsers[username] && authorizedUsers[username] === password;
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const guestName = parsedUrl.pathname.slice(1); // Remove the leading '/' from the path

    if (req.method === 'POST' && guestName) {
        const authHeader = req.headers['authorization'];

        if (!authenticate(authHeader)) {
            // If authentication fails
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Authorization Required' }));
            return;
        }

        let body = '';

        // Gather the data from the request
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });

        req.on('end', () => {
            // Create a JSON file with the guest's data
            fs.writeFile(path.join('guests',`${guestName}.json`), body, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Error saving guest data' }));
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(body);
            });
        });
    } else if (req.method === 'GET') {
        // Responding to GET requests (optional)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Guest List Server is running');
    } else {
        // Handling unsupported methods
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});