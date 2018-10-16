require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const DB = require('./database/mongo.js');
const bodyParser = require('body-parser');

const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const posts = require('./routes/api/posts.js');
const stories = require('./routes/api/stories.js');

const app = express();

// Body parser middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const dbURI = require('./config/keys.js').mongoURI;

const dbHost = process.env.DB_HOST || 'localhost';
const port = process.env.PORT || 8000;
const userZipcode = process.env.ZIPCODE || 94121;

mongoose
  .connect(`mongodb://${dbHost}/communityNews`)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/scope/hood/:zipcode', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.status(302).redirect(`/scope/hood/${userZipcode}`);
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/stories', stories);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist'));
});

app.listen(port, () =>
  console.log(`Server's good to go on port ${port}... and may I say... you have got it going on today!`));
