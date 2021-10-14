// Env variables
require('dotenv').config();

// Libraries
import express from 'express';
import cors from 'cors'; //cross origin requests
import helmet from 'helmet'; //for an added layer of security
import passport from 'passport';

// google auth
import googleAuthConfig from './config/google.config';
import routeConfig from './config/route.config';

// microservices routes
import Auth from './API/Auth';
import Restaurant from './API/Restaurant';
import Food from './API/Foods';
import Menu from './API/Menu';
import Image from './API/Images';
import Order from './API/Orders';
import Review from './API/Reviews';
import User from './API/User';

// Database Connection
import ConnectDB from './database/connection';

const zomato = express();

//application middlewers
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes - route = localhost:4000/auth/signup
zomato.use('/auth', Auth);
zomato.use('/restaurant', Restaurant);
zomato.use('/food', Food);
zomato.use('/menu', Menu);
zomato.use('/image', Image);
zomato.use('/order', Order);
zomato.use('/review', Review);
zomato.use('/user', User);

zomato.get('/', (req, res) => {
  res.json({ message: 'setup sucessful' });
});

zomato.listen(4000, () => {
  ConnectDB()
    .then(() => {
      console.log('server is up and running 🚀');
    })
    .catch((error) => {
      console.log('server is running but database connection is failed');
    });
});
