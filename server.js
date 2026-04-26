import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import db from './database/db.js';
import path from 'path';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Server 🌎 Connection Successful ✅ @: " + PORT));
});

// app.listen(port, function() {
//   console.log("Server is running on port: " + port);
// });