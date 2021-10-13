import express from 'express';

import { MenuModel, ImageModel } from '../../database/allModels';

const Router = express.Router();

/*
    Route           /list
    Description     get the list of menu based on id
    Params          _id
    Access          Public
    Mehtod          GET
*/

Router('/list/:id', (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
    Route           /image
    Description     get menu image based on id
    Params          _id
    Access          Public
    Mehtod          GET
*/

Router('/image/:id', (req, res) => {
  try {
    const { _id } = req.params;
    const menu = await ImageModel.findOne(_id);
    return res.json({ menu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
