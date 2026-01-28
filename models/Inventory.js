import Sequelize from 'sequelize';
import db from '../database/db.js';

const Inventory = db.define(

  "item",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    cost: {
      type: Sequelize.INTEGER
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
);

export default Inventory;