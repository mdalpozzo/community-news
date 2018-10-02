const express = require('express');

const router = express.Router();

// Load Story model
const Story = require('../../models/Story');

// @route   GET api/stories/test
// @desc    Tests stories route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Stories Works' }));

module.exports = router;
