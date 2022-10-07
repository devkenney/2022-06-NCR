import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { stocks } from '../data';

export default function Test (props) {



  const [stock, setStock] = useState();

  const params = useParams()

  useEffect(() => {
    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i].symbol === params.symbol) {
        setStock(stocks[i]);
      }
    }
  }, [])

  

  return (
    <>
      <h1>Test Page for {stock?.name}</h1>
      High is {stock?.high}<br/>
      Low is {stock?.low}
    </>
  )
}