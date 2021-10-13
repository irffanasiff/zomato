import express from 'express';

import { UserModel } from '../../database/allModels';

const Router = express.Router();

/*
Route     /
Des       Get a user data
Params    _userId
Access    Public
Method    GET  
*/

Router.get('/:_userId', async (req, res) => {
  try {
    const { _userId } = req.params;
    const getUser = await UserModel.findById(_userId);
    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /update
Des       update a user data
Params    _userId
Body      userData
Access    Public
Method    put  
*/

Router.put('/update/:_userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      { $set: userData },
      { new: true }
    );
    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
