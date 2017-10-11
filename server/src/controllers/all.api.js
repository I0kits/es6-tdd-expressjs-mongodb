import express from 'express';
import templateApi from './template.api';

const router = new express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'great!'});
});

// *** api routes *** //
router.use(templateApi);

export default router;
