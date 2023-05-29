// const express = require('express');
// const axios = require('axios');

// import axios from 'axios';

// const app = express();

// app.use(express.json());

// app.get('/fetch-image', async (req, res) => {
// const imageUrl = req.query.url;

// try {
// const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
// res.set('Content-Type', response.headers['content-type']);
// res.send(response.data);
// } catch (error) {
// console.error(error);
// res.status(500).send('Failed to fetch image');
// }
// });

// app.listen(3001, () => {
// console.log('Proxy server started on port 3001');
// });