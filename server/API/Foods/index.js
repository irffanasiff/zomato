import express from 'express';
import passport from 'passport';

import { FoodModel } from '../../database/allModels';

const Router = express.Router();

/*
    Route           /
    Description     get all the food based on particular restaurant
    Params          _id
    Access          Public
    Mehtod          GET
*/

Router.get('/:_id', (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    return res.json(foods);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
    Route           /r
    Description     get all the food based on particular category
    Params          category
    Access          Public
    Mehtod          GET
*/

Router.get('/r/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const foods = await FoodModel.find({
      catefory: { $regex: category, $options: 'i' },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
