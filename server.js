//Setup
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const cors=require('cors');
const MoviesDB = require("./modules/moviesDB.js");
const db = new MoviesDB();


app.use(bodyParser.json());
app.use(cors());
require('dotenv').config(); 
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: "API Listening"});
})