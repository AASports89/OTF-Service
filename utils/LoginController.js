import bcrypt from 'bcryptjs';
import Token from './Token.js';

const LoginController = async (req, res) => {
  const { USERNAME, PASSWORD } = req.body;
  if (!USERNAME || USERNAME === "" || !PASSWORD || PASSWORD === "") 
  {
    return res.status(400).send("⛔❗| All Fields Are Required |❗⛔");
  }
  try {
    const [checkUsername] = await req.pool.query(
      `SELECT * FROM USER`,
      [USERNAME].toLocaleString()
    );
    const usn = checkUsername[0];
    if (usn.USERNAME === null) 
    {
      return res.status(400).send("⛔❗| Invalid Username |❗⛔");
    }
    const [checkUserpassword] = await req.pool.query(
      `SELECT * FROM USER`,
      [USERNAME].toLocaleString());

    const foundUser = checkUserpassword[0];
    const matchPassword = await bcrypt.compare(PASSWORD, foundUser.PASSWORD);
    if (!matchPassword) 
    {
      return res.status(401).send("⛔❗| Invalid Password |❗⛔");
    } else {
      res.status(200)
      Token(foundUser, res);
    }
  } catch (error) {
    console.error("⛔❗| Login Error - ", error + " |❗⛔"); 
    res.status(500).send("⛔❗| Internal Server Error |❗⛔"); 
  }
};

export default LoginController;