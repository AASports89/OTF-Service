import Sequelize from 'sequelize';
import db from '../database/db.js';

const DriverLog = db.define(
  "driverLog",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    driverID: {
      type: Sequelize.STRING
    },
    fuelType: {
      type: Sequelize.STRING
    },
    totalFilled: {
      type: Sequelize.INTEGER
    },
    totalCost: {
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

export default DriverLog;