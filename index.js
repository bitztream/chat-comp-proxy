const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const Proxy = require('http-proxy');

//const api = proxy.createProxyServer();

app.use(cors());

app.get('/', express.static(path.join(__dirname, './')));

app.get('/streamers/random', (req, res) => {
  console.log('Fetching data on Random Streamer...');
  axios.get('http://localhost:8001/streamers/random')
    .then((responsefromService) => {
      console.log(Object.keys(responsefromService.data));
      res.send(responsefromService.data);
    })
});
app.get('/api/get', (req, res) => {
  axios.get('http://localhost:3000/api/get')
    .then((responsefromService) => {
      console.log(Object.keys(responsefromService.data));
      res.send(responsefromService.data);
    });
});

app.listen(3001);
console.log('Listening on port 3001...');
