import express from 'express';

import { OrderModel } from '../../database/allModels';

const Router = express.Router();

/*
Route     /
Des       Get all orders based on _id
Params    _id
Access    Public
Method    GET  
*/

Router.get('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const getOrders = await OrderModel.findOne({ user: _id });
    if (!getOrders) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.json({ getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /new
Des       add new order
Params    _id
Access    Public
Method    GET  
*/

Router.post('/new/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate(
      { user: _id },
      { $push: { orderDetails: orderDetails } },
      { new: true }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
