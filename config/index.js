require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const routes = require('./routes');
const routes = require('../routes/index');


const app = express();

mongoose.connect(
    process.env.MONGO_URL, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);

mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
// app.use('/', routes);
app.use('/', routes);

app.listen(3001);