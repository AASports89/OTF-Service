import jwt from 'jsonwebtoken';
const secret = "🪙";

const Token = (foundUser, response) => {
    const jwtToken = jwt.sign(
    {
      USER_ID: foundUser.USER_ID,
      USERNAME: foundUser.USERNAME
    },
    secret,
    {
      expiresIn: "30d"
    }
  );
  response.cookie("🪙", jwtToken, {
    httpOnly: true, 
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  console.log(response);
  return response.status(200).json({ msg: "🪙| Token Received |🪙" });
};

export default Token;