import CardBody from "./CardBody";
import CardImage from "./CardImage";
import Button from "./Button";
//create the component
export default function Card1(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  );
}

//export the component

/*
const print = (data) => console.log(`<h5>${data} World</h5>`)

print('hello')
*/
