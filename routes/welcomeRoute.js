import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
  res.send('Welcome to node js');
});

export default router;
