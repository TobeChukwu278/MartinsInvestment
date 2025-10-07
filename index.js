const express = require('express');
const { auth } = require('@auth/core');
const GoogleProvider = require('@auth/core/providers/google');
const CredentialProvider = require('@auth/core/providers/credentials');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();
const prisma = new PrismaClient();

const app = express();
app.use(express.json());


// login route
app.use('/api/auth/*', auth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        CredentialProvider({
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


// start app from here
app.listen(3001, () => console.log('Application server running on http://localhost:3001'));