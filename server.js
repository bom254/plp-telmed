/* importing dependencies */
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');

/* configuring */
app.use(express.json());
app.use(cors());
dotenv.config();

/* Linking to the data  */
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

/* Checking the connection to the database */
db.connect((err) =>{
    if(err){
        return console.log('Error connecting to mysql', err);
    }

    console.log('Connected successfully', db.threadId);
})
