// import db from '../database/db.js';
// import { Model, Sequelize } from 'sequelize';

// class Inventory extends Model{};

// Inventory.init(
//   {
//     id: {
//       type: Sequelize.DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: Sequelize.DataTypes.STRING
//     },
//     quantity: {
//       type: Sequelize.DataTypes.INTEGER
//     },
//     cost: {
//       type: Sequelize.DataTypes.DECIMAL
//     },
//     create_time: {
//       type: Sequelize.DataTypes.DATE,
//       default: DataTypes.NOW
//     }
//   },
//     {
//         db,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "inventory"
//     },
//   {
//     timestamps: false
//   });

// export default Inventory;