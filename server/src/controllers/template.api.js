import express from 'express';

const router = new express.Router();

router.get('/templates', function(req, res) {
  res.send('Yes, I am running!');
});

export default router;
