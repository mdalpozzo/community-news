const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const DB = require('../database/mongo.js');

const app = express();

const dbHost = process.env.DATABASE_HOST || 'localhost';
const port = process.env.PORT || 8000;
const userZipcode = process.env.ZIPCODE || 94121;

app.use('/home/:zipcode', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.status(302).redirect(`/home/${userZipcode}`);
});


MongoClient.connect(`mongodb://${dbHost}/`, (err, client) => {
  if (err) {
    throw err;
  } else {
    const db = client.db('communityNews');
    const collection = db.collection('articles');
    
    app.get('/zipcode', async (req, res) => {
      let { zipcode } = req.query;
      zipcode = Number(zipcode);
      const data = await collection.find({ zipcode }).sort({ upvotes: -1 }).toArray();
      res.send(data);
    });
    
    app.get('/county', async (req, res) => {
      let { county } = req.query;
      const data = await collection.find({ county }).sort({ upvotes: -1 }).toArray();
      res.send(data);
    });

    app.get('/city', async (req, res) => {
      let { city } = req.query;
      const data = await collection.find({ city }).sort({ upvotes: -1 }).toArray();
      res.send(data);
    });

    app.get('/state', async (req, res) => {
      let { state } = req.query;
      const data = await collection.find({ state }).sort({ upvotes: -1 }).toArray();
      res.send(data);
    });
  }
});


app.listen(port, () => console.log(`Server's good to go on port ${port}... and may I say... you have got it going on today!`));