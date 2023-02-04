import express from 'express';
import Order from '../models/orderModel';

const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});

export default router;
