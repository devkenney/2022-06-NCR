const React = require('react');

const Index = (props) => {

  return (
    <div>
      <h1> Index Route </h1>

      <a href="/fruits/new">Create a New Fruit!</a>

      <ul>
        {
          props.fruits.map((fruit, index) => {
            return (
              <li key={index}>
                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} {fruit.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
              </li>
            )
          })
        }
      </ul>

    </div>
  )

}

module.exports = Index