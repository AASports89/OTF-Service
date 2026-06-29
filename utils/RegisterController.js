import bcrypt from 'bcryptjs';
import Token from './Token.js';

const RegisterController = async (req, res) => {
  
  const { UN, PW, FN, LN, ADMIN } = req.body;
  if (!UN || UN === "" ||
      !PW || PW === "" ||
      !FN || FN === "" ||
      !LN || LN === "" ||
      !ADMIN || ADMIN === "") 
    {
      return res.status(400).send("⛔❗| All Fields Are Required |❗⛔");
    }
    try {

    const [checkUsername] = await req.pool.query(
      `SELECT COUNT(*) AS count FROM USER WHERE USERNAME = ${UN}`,
      [UN]
    );
    if (checkUsername[0].count > 0) 
    {
      return res.status(400).send("⛔❗| Username Already Exists |❗⛔");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(PW, salt);

    const [insertUser] = await req.pool.query(
      `INSERT INTO USER (USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, IS_ADMIN) VALUES (
      ${UN}, ${PW}, ${FN}, ${LN}, ${ADMIN}
      )`,
      [UN, hashedPassword, FN, FN, LN, ADMIN]
    );

    res.status(201).json({ id: insertUser.insertId, UN });
  } catch (error) {
    console.error("⛔❗| Error User Registeration - ", error + " |❗⛔"); 
    res.status(500).send("⛔❗| Internal Server Error |❗⛔");
  }
};

export default RegisterController;