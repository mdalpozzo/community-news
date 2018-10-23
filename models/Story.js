const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const StorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
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
  vote: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      test: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Story = mongoose.model('stories', StorySchema);

module.exports = Story;
