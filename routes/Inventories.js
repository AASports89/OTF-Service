import express from 'express';
import cors from 'cors';
import Inventory from '../models/Inventory.js';
const Inventories = express.Router();
Inventories.use(cors());

Inventories.post("/inventory", (req, res) => {
  const today = new Date();
  const inventoryData = {
    id: req.body.id,
    name: req.body.name,
    quantity: req.body.quantity,
    cost: req.body.cost,
    created: today
  };

  Inventory.findOne({
    where: {
      name: req.body.name
    }
  })
    .then(item => {
      if (!item) {
        Inventory.create(inventoryData)
            .then(user => {
              res.json({ status: item.name + "[" + item.id + "]" + "successfully added ✅" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
      } else {
        res.json({ error: "🚫***| Item Already Added |***🚫" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

Inventories.post("/inventory", (req, res) => {
  Inventory.findOne({
    where: {
      name: req.body.name
    }
  })
    .then(item => {
      if (item) {
      } else {
        res.status(400).json({ error: "🚫***| Invalid Item |***🚫" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

Inventories.get("/inventory", (req, res) => {

  Inventory.findOne({
    where: {
      id: id
    }
  })
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.send("🚫***| Invalid Item |***🚫");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

export default Inventories;