import db from './db.js';
import mysql2 from 'mysql2';
import fs from 'fs';
import User from '../models/User.js';

const connection = mysql2.createConnection(db);

const seed = fs.readFileSync("./seed.sql", {encoding: "UTF-8"});

new User(seed);
        
connection.query(seed);
console.log(seed);

connection.end();