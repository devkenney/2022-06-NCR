const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const login = (req, res) => {
  User.findOne({ email: req.body.email }, async (error, foundUser) => {
    if (foundUser) {
      const result = await bcrypt.compare(req.body.password, foundUser.password)
      if (result) {
        const token = createJWT(foundUser);
        res.status(200).json({
          jwt_token: token
        })
      } else {
        res.status(401).json({
          error: 'incorrect password'
        })
      }
    } else {
      res.status(404).json({
        error: 'User Not Found!'
      })
    }
  })
}

module.exports = {
  create,
  login
}