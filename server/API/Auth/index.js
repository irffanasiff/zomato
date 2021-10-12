import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../../database/allModels';

const Router = express.Router();

/*
  Router    /signup
  Des       singup with email and password
  Params    none
  Access    Public
  Method    POST
*/

Router.post('/signup', async (req, res) => {
  try {
    const { email, password, fullname, phoneNumber } = req.body.credentials;

    // check whether email or phone number exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByPhone || checkUserByEmail) {
      return res.json({ error: 'User Already Exists' });
    }

    // hashing & salting
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    // DB
    await UserModel.create({
      ...req.body.credentials,
      password: hashedPassword,
    });

    // JWT auth token
    const token = jwt.sign({ user: { fullname, email } }, 'ZomatoApp');

    return res.status(200).json({token})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
