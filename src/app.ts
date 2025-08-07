import express from 'express';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Here you can define your routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

export { app };