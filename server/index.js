// Env variables
require('dotenv').config();

// Libraries
import express from 'express';
import cors from 'cors'; //cross origin requests
import helmet from 'helmet'; //for an added layer of security
import passport from 'passport';

// google auth
import googleAuthConfig from './config/google.config';

// microservices routes
import Auth from './API/Auth';

// Database Connection
import ConnectDB from './database/connection';

const zomato = express();

//application middlewers
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//passport configuration
googleAuthConfig(passport);

// Application Routes
// route = localhost:4000/auth/signup
zomato.use('/auth', Auth);

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
