const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Configure the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});