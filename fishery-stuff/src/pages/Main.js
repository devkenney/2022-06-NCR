import { Link } from "react-router-dom"

export default function Main (props) {

  return (
    <>
      {
        props.fishes.map((fish, index) => {
          return (
            <div>
              <Link to={`/species/${fish["Species Name"].toLowerCase().split(' ').join('-')}`}><h2>{fish["Species Name"]}</h2></Link>
              <h3>{fish["Scientific Name"]}</h3>
            </div>
          )
        })
      }
    </>
  )
}

// Crimson%20Jobfish (Crimson Jobfish)
// crimson jobfish
// ["crimson", "jobfish"]
// crimson-jobfish