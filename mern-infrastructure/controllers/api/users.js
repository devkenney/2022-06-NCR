const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const createJWT = (user) => {
  return jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  )
}

const create = (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.error(error);
      res.status(400).json(error)
    } else {
      const token = createJWT(createdUser);
      res.status(201).json({
        jwt_token: token
      })
    }
  });
}

module.exports = {
  create
}