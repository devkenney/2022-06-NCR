const React = require('react');

const New = (props) => {
  return(
    <div>
      <h1> New Route </h1>

      <form action="/fruits" method="POST">
        <label>Name:</label>
        <input type="text" name="name" /><br/>
        <label>Color:</label>
        <input type="text" name="color" /><br/>
        <label>Is Ready to Eat:</label>
        <input type="checkbox" name="readyToEat" /><br/>
        <input type="submit" name="" value="Create Fruit!" />
      </form>
    </div>
  )
}

module.exports = New;