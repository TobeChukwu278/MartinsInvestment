const express = require('express');
const { ExpressAuth } = require("@auth/express");
const { auth } = require('@auth/core');
const GoogleProvider = require("@auth/express/providers/google").default;
const Google = require("@auth/express/providers/google");
// const Credentials = require("@auth/express/providers/credentials");
const CredentialsProvider = require('@auth/core/providers/credentials').default;
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// middleware to handle auth routes
app.use("/auth", ExpressAuth({ providers: [Google] }))

app.get('/', (req, res) => {
    res.send('Hello World! This is the authentication server.');
});


// login route
app.use('/api/auth', ExpressAuth({
    providers: [
        // FIX: Use the imported GoogleProvider function to call it with config
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });
                if (!user) return null;

                const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                if (!isValidPassword) return null;

                return { id: user.id, name: user.fullname, email: user.email };
            }
        })
    ],
    secret: process.env.AUTH_SECRET
}));

// signup route
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { email, password, fullname } = req.body;
        // checking if a user with the submited email already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        // if true, respond with error that user already exits
        if (existingUser) return res.status(400).json({ error: 'Email already exists' });

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // after password is hashed, proced to creating user
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, fullname }
        });

        // after user is successfully created, a response shoud be sent
        res.json({ success: true, user: { id: user.id, email: user.email } });
    } catch (err) {
        // if an unexpectef error occures during sign up this message sjould be displayed
        console.error(err);
        res.status(500).json({ error: 'Signup failed' });
    }
});

// pinger.js
// const PING_URL = 'https://YOUR_RENDER_SERVICE_URL.onrender.com';
const PING_URL = 'http://localhost:3001';
const INTERVAL_MS = 50 * 1000; // 50 seconds

async function pingService() {
    try {
        const response = await fetch(PING_URL);
        if (response.ok) {
            console.log(`Successfully pinged service at ${new Date().toISOString()}`);
        } else {
            console.error(`Ping failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during ping:', error.message);
    }

    // Schedule the next ping
    setTimeout(pingService, INTERVAL_MS);
}

console.log(`Pinger started. Pinging ${PING_URL} every ${INTERVAL_MS / 1000} seconds.`);
pingService();


// start app from here
app.listen(3001, () => console.log('Application server running on http://localhost:3001'));