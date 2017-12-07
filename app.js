// const sound = require('./sound');
// sound.play('http://localhost/resources/Titanium.mp3');

const express = require('express');
const api = express.Router();
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());