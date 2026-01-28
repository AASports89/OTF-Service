import axios from "axios";

const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      username: newUser.username,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};

const login = user => {
  return axios
    .post("users/login", {
      username: user.username,
      password: user.password
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
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

const driveLog = driverLogs => {
  return axios
    .post("/driverLog", {
      driverID: driverLogs.driverID,
      fuelType: driverLogs.fuelType,
      totalFilled: driverLogs.totalFilled,
      totalCost: driverLogs.totalCost
    })
    .catch(err => {
      console.log(err);
    });
};

const itemInventory = item => {
  return axios
    .post("/inventory", {
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      cost: item.cost
    })
    .catch(err => {
      console.log(err);
    });
};

export {register, login, logOut, driveLog, itemInventory};