// import db from '../database/db.js';
// import Sequelize from 'sequelize';

// const serviceLogModel = new Sequelize({
//     id: {
//       type: Sequelize.DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     vehicle_vin: {
//       type: Sequelize.DataTypes.STRING
//     },
//     vehicle_year: {
//       type: Sequelize.DataTypes.STRING
//     },
//     vehicle_make: {
//       type: Sequelize.DataTypes.STRING
//     },
//     vehicle_model: {
//       type: Sequelize.DataTypes.STRING
//     },
//     scheduled_time: {
//       type: Sequelize.DataTypes.DATE
//     },
//     client_first_name: {
//       type: Sequelize.DataTypes.STRING
//     },
//     client_last_name: {
//       type: Sequelize.DataTypes.STRING
//     },
//     client_phone_area_code: {
//       type: Sequelize.DataTypes.STRING
//     },
//     client_phone: {
//       type: Sequelize.DataTypes.STRING
//     },
//     total_billed: {
//       type: Sequelize.DataTypes.DECIMAL
//     },
//     create_time: {
//       type: Sequelize.DataTypes.DATE,
//       default: Sequelize.DataTypes.NOW
//     },
//     notes: {
//       type: Sequelize.DataTypes.STRING
//     },
//     user_id: {
//       type: Sequelize.DataTypes.INTEGER,
//       references: {
//       model: 'User',
//       key: 'id',
//       },
//     }
// },
// {
//       db,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'ServiceLog'
// });

// export default ServiceLog;