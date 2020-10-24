const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => res.send('EXPRESS'));

app.listen(PORT, () => console.log('Server is working'))