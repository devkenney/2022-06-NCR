const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1> Index </h1>

      <ul>
        {
          props.veggies.map((veggie, index) => {
            return (
              <li key={index}>
                The <a href={`/veggies/${index}`}>{veggie.name}</a> is {veggie.color} and is {veggie.readyToEat ? 'Ready to eat!' : 'Not ready to eat!'}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

module.exports = Index;