const React = require('react');

const ListItem = ({ fruit }) => {

  return (
    <li>
      The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} {fruit.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
    </li>
  )

}

module.exports = ListItem;