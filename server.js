'use strict';
/**
 * Dependencies
 */
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');

require('dotenv').config();

const PORT = process.env.PORT;

const client = new pageXOffset.Client(process.env.DATABASE_URL);
client.connect();
client.on('err', err => console.log(err));

const app = express();

app.use(cors());


/**
 * GET REQUESTS
 */

app.get('/location', getLocation);
// app.get('/weather', getWeather);
// app.get('/yelp', getYelp);
// app.get('/movies', getMovies);


/**
 * Location
 */

function Location(query, data) {
  this.search_query = query;
  this.formatted_query = data.formatted_address;
  this.latitude = data.geometry.location.lat;
  this.longitude = data.geometry.location.lat;
}

Location.prototype.save = function {
  let SQL = `INSERT INTO locations (search_query,formatted_query,latitude,longitude) VALUES($1,$2,$3,$4)`;
  let values = Object.values(this);

  clientInformation.query(SQL, values);
}

Location.fetchLocation = (query) => {

}
