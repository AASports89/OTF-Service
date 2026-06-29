// import User from './User.js';
// import ServiceLog from './ServiceLog.js';
// import Inventory from './Inventory.js';

// ServiceLog.belongsTo(User, {
//     foreignKey: "user_id",
// });

// User.hasMany(ServiceLog, {
//     foreignKey: "user_id",
//     onDelete: "CASCADE",
// });

// Inventory.belongsTo(ServiceLog, {
//     foreignKey: "serviceLog_id",
// });

// ServiceLog.hasMany(Inventory, {
//     foreignKey: "serviceLog_id",
//     onDelete: "CASCADE",
// });

// Inventory.belongsTo(User, {
//     foreignKey: "user_id",
// });

// User.hasMany(Inventory, {
//     foreignKey: "user_id",
//     onDelete: "CASCADE",
// });

// export default User;