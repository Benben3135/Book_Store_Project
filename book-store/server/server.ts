const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Require your routes
const booksRoutes = require('./API/booksRoutes');

// Use routes
// app.use('/api/books', booksRoutes);

// app.get('/check', (req, res) => {
//     try {
//         console.log('success!');
//         res.status(200).send({ ok: true }); // Status 200 for success
//     } catch (error) {
//         res.status(500).send({ error: 'Internal Server Error' }); // Send error response
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
