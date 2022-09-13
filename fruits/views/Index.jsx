const React = require('react');

const Index = (props) => {

  return (
    <div>
      <h1> Index Route </h1>

      <ul>
        {
          props.fruits.map((fruit, index) => {
            return (
              <li key={index}>
                The {fruit.name} is {fruit.color}             {fruit.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
              </li>
            )
          })
        }
      </ul>

    </div>
  )

}

module.exports = Index