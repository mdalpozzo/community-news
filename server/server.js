const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));



app.listen(port, () => console.log(`Server's good to go on port ${port}... and may I say... you have got it going on today!`));