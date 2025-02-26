var hobbiesUtil = require('../lib/hobbies');
var videoUtils = require('../lib/videos');
var bookUtils = require('../lib/books');
var express = require('express');
var router = express.Router();

router.post('/results', async (req, res) => {
  const category = req.params.category || 'general';
  const hobby = await hobbiesUtil.getHobby(category);
  const hobbyBooks = await bookUtils.getBooks(hobby);
  const hobbyVideos = await videoUtils.getVideos(hobby);
  res.render('results', {
    hobby,
    hobbyVideos,
    hobbyBooks,
  });
});

module.exports = router;
