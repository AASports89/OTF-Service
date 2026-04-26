import bcrypt from 'bcrypt';
import db from '../database/db.js';
import Sequelize from 'sequelize';

const userModel = new Sequelize(
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.DataTypes.STRING
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [6],
          },
    },
    isAdmin: {
      type: Sequelize.DataTypes.BOOLEAN,
      default: false,
    },
    first_name: {
      type: Sequelize.DataTypes.STRING
    },
    last_name: {
      type: Sequelize.DataTypes.STRING
    },
    create_time: {
      type: Sequelize.DataTypes.DATE,
      default: Sequelize.DataTypes.NOW
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

  userModel.validate = async function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  const User = userModel.createSchema('User', true);
  
export default User;