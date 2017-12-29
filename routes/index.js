import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express ES6'
  });
});

export default router;
