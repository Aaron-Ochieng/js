import http, { createServer } from 'http'
import fs from 'fs/promises'
import path from 'path'
import { json } from 'node:stream/consumers'

const base_dir = process.env.TEST_TMP_PATH || process.cwd()
const guest_dir = path.join('guests')

const authorized_users = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
}

const parse_auth_header = (auth_header) => {
    if (!auth_header || !auth_header.startsWith('Basic')) {
        return null;
    }
    const credentials = auth_header.slice(6);
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
    return { username, password }
}

const server = createServer((req, res) => {
    const auth = parse_auth_header(req.headers.authorization);
    if (!auth || !authorized_users[auth.username] || !authorized_users[auth.password] !== auth.password) {
        res.writeHead(401, {
            'Content-Type': 'application/json',
            'www-authenticate': 'Basic realm="Restricted Area"'
        })
        res.end(JSON.stringify({ error: 'Authorization Required' }))
    }

    if (req.method === "POST") {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.end('end', async () => {
            try {
                if (!body) {
                    body = {
                        answer: 'yes',
                        drink: 'juice',
                        food: 'pizza'
                    }
                }

                const guest_name = req.url.slice(1)
                await fs.mkdir(guest_dir, `${guest_name}`)
            }
        })
    }
})