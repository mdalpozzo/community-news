require('dotenv').config();

const apiHost = process.env.API_HOST || 'http://localhost:8000/';
const dbURL = process.env.DB_HOST || 'mongodb://localhost/communityNews';
const port = process.env.PORT || 8000;
const userZipcode = process.env.ZIPCODE || 94121;

module.exports = {
  apiHost,
  dbURL,
  port,
  userZipcode,
};
