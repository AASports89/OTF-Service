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
    driver_id: {
      type: Sequelize.STRING
    },
    fuel_type: {
      type: Sequelize.STRING
    },
    total_filled: {
      type: Sequelize.INTEGER
    },
    total_cost: {
      type: Sequelize.DECIMAL
    },
    create_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
);

export default DriverLog;