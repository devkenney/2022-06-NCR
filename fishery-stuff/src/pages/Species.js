import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Species (props) {

  const [fish, setFish] = useState({});

  const params = useParams();
  const { fishName } = params

  const getData = async () => {
    const response = await fetch(`https://www.fishwatch.gov/api/species/${fishName}`);
    const data = await response.json();
    setFish(data[0]);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>{fish?.["Species Name"]}</h1>
      <h2>{fish?.["Scientific Name"]}</h2>
      <img src={fish?.["Species Illustration Photo"]?.src} />
      {
        fish?.["Image Gallery"]?.map((image, index) => {
          return (
            <img src={image?.src} />
          )
        })
      }
    </>
  )
}