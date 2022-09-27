export default (props) => {

  const handleFunc = () => {
    if (props.operator === "+") {
      props.setCount(props.count + 1);
    } else {
      props.setCount(props.count - 1);
    }
  }

  return (
    <button onClick={handleFunc}>{props.operator}</button>
  )
}