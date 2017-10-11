let express = require('express');
let router = new express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'great!'});
});

// *** api routes *** //
router.use(require('./foo.api.js'));

module.exports = router;
