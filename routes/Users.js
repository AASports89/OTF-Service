import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
const Users = express.Router();
Users.use(cors());

process.env.SECRET_KEY = "secret";

Users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
    created: today
  };

  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 8, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.username + "successfully registered ✅" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "🚫***| Duplicate User Found |***🚫" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

Users.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: "🚫***| Invalid User |***🚫" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

Users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("🚫***| Invalid User |***🚫");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

export default Users;