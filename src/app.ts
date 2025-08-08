import express from 'express';
import { PrismaClient } from './generated/prisma/index';

const app = express();
const prisma = new PrismaClient()

app.use(express.json()); // Middleware to parse JSON bodies

// Here you can define your routes
app.get('/', async (req, res) => {
    const userCount = await prisma.user.count()
    res.json(
        userCount == 0
        ? "No users have been added yet."
        : "Some users have been added to the database."
    )
});

export { app };