const React = require('react');

const Show = (props) => {
  return (
    <div>
      <h1> Show Page </h1>

      <p>
        The {props.veggie.name} is {props.veggie.color} and is {props.veggie.readyToEat ? 'Ready to eat!' : 'Not ready to eat!'}
      </p>
    </div>
  );
}

module.exports = Show;