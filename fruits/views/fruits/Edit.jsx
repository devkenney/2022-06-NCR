const React = require('react');
const DefaultLayout = require('../components/Default');

const Edit = ({ fruit }) => {
  return(
    <DefaultLayout title="Edit Page">

      <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={fruit.name} /> <br/>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" defaultValue={fruit.color} /> <br/>
        <label htmlFor="readyToEat">Is Ready To Eat:</label>
        {
          fruit.readyToEat ?
            <input type="checkbox" name="readyToEat" defaultChecked />
            : <input type="checkbox" name="readyToEat" />
          }
          <br />
        <input type="submit" value="Submit Changes!" />
      </form>

    </DefaultLayout>
  )
}

module.exports = Edit;