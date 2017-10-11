
const express = require('express');
const router = new express.Router();

router.get('/something', function(req, res) {
  res.send('Yes, I am running!');
});

module.exports = router;
