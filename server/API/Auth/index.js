import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
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
    // checking if user exist
    await UserModel.findByEmailAndPhone(req.body.credentials);

    // DB
    const newUser = await UserModel.create(req.body.credentials);

    //JWT auth token
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
  Route         /signin
  Descrip       Signin with email and password
  Params        None
  Access        Public
  Method        POST
 */

Router.post('/signin', async (req, res) => {
  try {
    //await ValidateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    //JWT Auth Token
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
 Route     /google
 Des       Google Signin
 Params    none
 Access    Public
 Method    GET
 */
Router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

/*
 Route     /google/callback
 Des       Google Signin Callback
 Params    none
 Access    Public
 Method    GET
 */
Router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    return res.redirect(
      `http://localhost:4000/google/${req.session.passport.user.token}`
    );
  }
);

export default Router;
