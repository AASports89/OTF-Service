import express from 'express';
import cors from 'cors';
import DriverLog from '../models/DriverLog.js';
const DriverLogs = express.Router();
DriverLogs.use(cors());

DriverLogs.post("/driverLog", (req, res) => {
  const today = new Date();
  const driverLogData = {
    driver_id: req.body.driver_id,
    fuel_type: req.body.fuel_type,
    total_filled: req.body.total_filled,
    total_cost: req.body.total_cost,
    created: today
  };

  DriverLog.findOne({
    where: {
      driver_id: req.body.driver_id
    }
  })
    .then(driverLog => {
      if (!driverLog) {
        DriverLog.create(driverLogData)
            .then(driverLog => {
              res.json({ status: driverLog.driver_id + "successfully logged ✅" });
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

DriverLogs.post("/driverLogs", (req, res) => {
  DriverLog.findOne({
    where: {
      driver_id: req.body.driver_id
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

DriverLogs.get("/driverLogs", (req, res) => {

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