'use strict';
/**
 * Dependencies
 */
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());


/**
 * GET REQUESTS
 */

 app.get('/location', getLocation);
 app.get('/weather', getWeather);
 app.get('/yelp', getYelp);
 app.get('/movies', getMovies);