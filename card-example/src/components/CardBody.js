import Button from "./Button";

export default function CardBody(props) {
  console.log("this is props:", props);
  return (
    <div className="card-body">
      <h5 className="card-title">Santorini</h5>
      <p className="card-text">"This was one of the most amazing places I've ever seen. A must see for everyone"</p>
      <Button url="https://unsplash.com/s/photos/santorini" />
    </div>
  );
}

//export the component
