// import db from '../database/db.js';
// import Sequelize from 'sequelize';

// const Inventory = Sequelize.Model(
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