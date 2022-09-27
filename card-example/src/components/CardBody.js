import Button from "./Button";

export default function CardBody(props) {
  // console.log("this is props:", props);
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <Button url={props.url} />
    </div>
  );
}

//export the component