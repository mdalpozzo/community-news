const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const StorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
  nominations: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
  },
});

module.exports = Story = mongoose.model('stories', StorySchema);
