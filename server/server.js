const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const DB = require('../database/mongo.js');
const bodyParser = require('body-parser');


const app = express();

const dbHost = process.env.DATABASE_HOST || 'localhost';
const port = process.env.PORT || 8000;
const userZipcode = process.env.ZIPCODE || 94121;

app.use(bodyParser.json());
app.use('/scope/hood/:zipcode', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.status(302).redirect(`/scope/hood/${userZipcode}`);
});


MongoClient.connect(`mongodb://${dbHost}/`, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    throw err;
  } else {
    const db = client.db('communityNews');
    const collection = db.collection('articles');
    
    app.get('/zipcode', async (req, res) => {
      let { ID } = req.query;
      ID = Number(ID);
      const data = await collection.find({ zipcode: ID }).sort({ upvotes: -1 }).toArray();
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

    app.post('/upVote', async (req, res) => {
      const { voteCount, ID } = req.body.data;
      // console.log('votecount:', voteCount, 'ID:', ID);
      await DB.updateVote(ID, collection, voteCount);
      res.end();
    });

    app.post('/upNom', async (req, res) => {
      const { nomCount, ID } = req.body.data;
      console.log('votecount:', nomCount, 'ID:', ID);
      await DB.updateNomination(ID, collection, nomCount);
      res.end();
    });
  }
});


app.listen(port, () => console.log(`Server's good to go on port ${port}... and may I say... you have got it going on today!`));
