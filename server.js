import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes/AuthRoutes.js';
import db from 'mysql2/promise.js';
import RegisterController from './utils/RegisterController.js';
import LoginController from './utils/LoginController.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

const DBConn = async () => {
  try { 
    const pool = new db.createPool({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "jump23aa",
      database: "OTF",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
  }});

  await pool.query(
      `CREATE DATABASE IF NOT EXISTS ${`OTF`}`
    );
    console.log(`Database ${`OTF`} created`);

    await pool.query(`USE ${`OTF`}`);
    console.log(`Switched to ${`OTF`}`);

    await pool.query(
      `CREATE TABLE IF NOT EXISTS ${`USER`} (
            USER_ID INT AUTO_INCREMENT PRIMARY KEY,
            USERNAME VARCHAR(16) NOT NULL UNIQUE,
            PASSWORD VARCHAR(8) NOT NULL,
            FIRST_NAME VARCHAR(45) NOT NULL,
            LAST_NAME VARCHAR(45) NOT NULL,
            IS_ADMIN BIT(1) DEFAULT 0,
            CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    );
    console.log(`${`USER`} table created`);
    return pool;

  } catch (error) {
    console.error("⛔❗| DB Connection Error |❗⛔", error);
  }
};

app.use(express.static(path.join('__dirname', '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join('__dirname', '../client/public/index.html'));
});

let pool;

(async () => {
  pool = await DBConn();

  app.use((req, res, next) => {
    req.pool = pool;
    next();
  });

  app.post('/register', RegisterController);
  app.post('/login', LoginController);

  app.listen(PORT, () => {
    console.log(`Server 🌎 Connection Successful ✅| @ -  [http://localhost:${PORT}] |✅`);
  });
})();