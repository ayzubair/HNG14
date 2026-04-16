const express = require('express');
const app = express();
const port = 3000; // Running on a non-public local port

//Middleware to ensure Content-Type is application/json
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Task: GET /
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running' });
});

// Task: GET ?health
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Task: GET /me
app.get('/me', (req, res) => {
    res.status(200).json({
        name: 'Zubairu Ayuba Ahmad',
        email: 'dayzubair@hotmail.com',
        github: 'https://github.com/ayzubair',
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});