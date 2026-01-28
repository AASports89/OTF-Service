import express from 'express';
import cors from 'cors';
import DriverLog from '../models/DriverLog.js';
const DriverLogs = express.Router();
DriverLogs.use(cors());

DriverLogs.post("/driverLog", (req, res) => {
  const today = new Date();
  const driverLogData = {
    driverID: req.body.driverID,
    fuelType: req.body.fuelType,
    totalFilled: req.body.totalFilled,
    totalCost: req.body.totalCost,
    created: today
  };

  DriverLog.findOne({
    where: {
      driverID: req.body.driverID
    }
  })
    //TODO bcrypt
    .then(driverLog => {
      if (!driverLog) {
        DriverLog.create(driverLogData)
            .then(driverLog => {
              res.json({ status: driverLog.driverID + "successfully logged ✅" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
      } else {
        res.json({ error: "🚫***| Duplicate Driver Log Found |***🚫" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

DriverLogs.post("/driverLog", (req, res) => {
  DriverLog.findOne({
    where: {
      driverID: req.body.driverID
    }
  })
    .then(driverLog => {
      if (driverLog) {

      } else {
        res.status(400).json({ error: "🚫***| Invalid Driver Log |***🚫" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

DriverLogs.get("/driverLog", (req, res) => {

  DriverLog.findOne({
    where: {
      id: id
    }
  })
    .then(driverLog => {
      if (driverLog) {
        res.json(driverLog);
      } else {
        res.send("🚫***| Invalid Driver Log |***🚫");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

export default DriverLogs;