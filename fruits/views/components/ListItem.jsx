const React = require('react');

const ListItem = ({ fruit }) => {

  return (
    <li>
      The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} {fruit.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
      <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST" >
        <input type="submit" value="DELETE" />
      </form>
      <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
    </li>
  )

}

module.exports = ListItem;