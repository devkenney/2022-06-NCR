const React = require('react');

const Login = (props) => {
  return (
    <div>
      <form action="/users/login" method="post">
        <fieldset>
          <legend>User Login</legend>

          <label>USERNAME:</label>
          <input type="text" name="username" required />

          <label>PASSWORD:</label>
          <input type="password" name="password" required />

          <input type="submit" value="Login" />
        </fieldset>
      </form>
    </div>
  )
}

module.exports = Login;