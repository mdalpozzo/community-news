const express = require('express');
const { ObjectId } = require('mongodb');

const router = express.Router();

// Load Story model
const Story = require('../../models/Story');

// @route   GET api/stories/test
// @desc    Tests stories route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Stories Works' }));

// @route   GET api/stories/zipcode
// @desc    Fetches stories
// @access  Public
router.get('/zipcode', async (req, res) => {
  let { ID } = req.query;
  ID = Number(ID);
  Story.find({ zipcode: ID }, null, { sort: { upvotes: -1 } }, (err, stories) => {
    res.send(stories);
  });
});

// @route   POST api/stories/publish
// @desc    Publish story
// @access  Public
router.post('/publish', (req, res) => {
  const newStory = new Story({
    id: req.body.id,
    photo_url: req.body.photo_url,
    author: req.body.author,
    title: req.body.title,
    text: req.body.text,
    zipcode: req.body.zipcode,
    city: req.body.city,
    county: req.body.county,
    state: req.body.state,
    upvotes: 0,
    nominations: 0,
    tag: req.body.tag,
  });

  newStory
    .save()
    .then(story => res.json(story))
    .catch(err => console.log(err));
});

// @route   POST /api/stories/upvote
// @desc    Update vote count
// @access  Public
router.post('/upVote', async (req, res) => {
  const { voteCount, ID } = req.body.data;
  Story.updateOne({ _id: ObjectId(ID) }, { $set: { upvotes: Number(voteCount) + 1 } }, (err) => {
    if (err) throw err;
    res.end();
  });
});

// @route   Post /api/stories/upnom
// @desc    Update nomination count
// @access  Public
router.post('/upNom', async (req, res) => {
  const { nomCount, ID } = req.body.data;
  Story.updateOne({ _id: ObjectId(ID) }, { $set: { nominations: Number(nomCount) + 1 } }, (err) => {
    if (err) throw err;
    res.end();
  });
});

module.exports = router;