import axios from "axios";

const register = newUser => {
  return axios
    .post("http://192.168.1.8:3000/users/register", {
      USERNAME: newUser.USERNAME,
      PASSWORD: newUser.PASSWORD,
      FIRST_NAME: newUser.FIRST_NAME,
      LAST_NAME: newUser.LAST_NAME
    })
    .then(response => {
      console.log("Registered");
    });
};

const login = user => {
  return axios
    .post("http://192.168.1.8:3000/users/login", {
      USERNAME: user.USERNAME,
      PASSWORD: user.PASSWORD
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const logOut = user => {
    console.error('Error');
    localStorage.removeItem("usertoken");
  }

const driveLog = driverLogs => {
  return axios
    .post("http://192.168.1.8:3000/auth/driverLogs", {
      DRIVER_ID: driverLogs.DRIVER_ID,
      FUEL_TYPE: driverLogs.FUEL_TYPE,
      TOTAL_FILLED: driverLogs.TOTAL_FILLED,
      TOTAL_COST: driverLogs.TOTAL_COST
    })
    .catch(err => {
      console.log(err);
    });
};

const itemInventory = item => {
  return axios
    .post("http://192.168.1.8:3000/auth/inventories", {
      ID: item.ID,
      NAME: item.NAME,
      QUANTITY: item.QUANTITY,
      COST: item.COST
    })
    .catch(err => {
      console.log(err);
    });
};

export {register, login, logOut, driveLog, itemInventory};