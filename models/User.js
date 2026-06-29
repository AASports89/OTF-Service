import bcrypt from 'bcrypt';
import db from '../database/db.js';
import { Sequelize } from 'sequelize';

class User extends db.Model{};

User.validate = async function (password) {
    return bcrypt.compareSync(password, this.password);
  };

User.init(
  {
    user_id: {
      type: db.Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: db.Sequelize.DataTypes.STRING
    },
    password: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [6],
          },
    },
    // isAdmin: {
    //   type: Sequelize.DataTypes.BOOLEAN,
    //   default: false,
    // },
    first_name: {
      type: db.Sequelize.DataTypes.STRING
    },
    last_name: {
      type: db.Sequelize.DataTypes.STRING
    },
    create_time: {
      type: db.Sequelize.DataTypes.DATE,
      default: db.Sequelize.DataTypes.NOW
    },
    hooks: {
      async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(
      newUserData.password,
      10);
        return newUserData;
      },
    }
});
  
export default User;