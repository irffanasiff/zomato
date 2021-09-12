// Env variables
require('dotenv').config();

// Libraries
import express from 'express';
import cors from 'cors'; //cross origin requesrt
import helmet from 'helmet'; //for an added layer of security

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

// Application Route
zomato.use('/auth', Auth)

zomato.get('/', (req, res) => {
  res.json({ message: 'setup sucessful' });
});

zomato.listen(4000, () => {
  ConnectDB()
    .then(() => {
      console.log('server is running 🚀');
    })
    .catch((error) => {
      console.log('server is running but database connection is failed');
    });
});
