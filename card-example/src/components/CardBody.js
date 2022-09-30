import Button from "./Button";
import data from '../data'

export default function CardBody({ title, text, url }) {
  // console.log("this is props:", props);
  console.log(data)
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Button url={url} />
    </div>
  );
}

//export the component