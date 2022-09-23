const React = require('react');

const Signup = (props) => {
  return (
    <div>
      <form action="/users/signup" method="post">
        <fieldset>
          <legend>New User</legend>

          <label>USERNAME:</label>
          <input type="text" name="username" required />

          <label>PASSWORD:</label>
          <input type="password" name="password" required />

          <input type="submit" value="Create Account!" />
        </fieldset>
      </form>
    </div>
  )
}

module.exports = Signup