import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Users from './routes/Users.js';
import DriverLogs from './routes/DriverLogs.js';
import Inventories from './routes/Inventories.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", Users);
app.use("/driverLogs", DriverLogs)
app.use("/inventories", Inventories)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, function() {
  console.log("Server is running on port: " + port);
});