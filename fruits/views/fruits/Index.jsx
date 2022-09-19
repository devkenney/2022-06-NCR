const React = require('react');
const DefaultLayout = require('../components/Default');
const ListItem = require('../components/ListItem');

const Index = (props) => {

  return (
    <DefaultLayout title={"Fruits Index Page"}>
      <div>
        <h1> Index Route </h1>

        <a href="/fruits/new">Create a New Fruit!</a>

        <ul>
          {
            props.fruits.map((fruit, index) => {
              return (
                <ListItem key={index} fruit={fruit} />
              )
            })
          }
        </ul>

      </div>
    </DefaultLayout>
  )

}

module.exports = Index