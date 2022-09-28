import { useState } from "react"

export default (props) => {

  const [formData, setFormData] = useState({
    searchterm: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.moviesearch(formData.searchterm)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm} />
        <input type="submit" />
      </form>
    </>
  )
}