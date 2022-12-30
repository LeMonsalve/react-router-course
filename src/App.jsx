import {useEffect, useState} from "react";
import axios from "axios";

import './styles/App.css'

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {

    axios.get(`${API_URL}/assets`)
      .then( ({ data }) => {
        setCryptos( data.data )
      })
      .catch( err => {
        console.error("The request is fail: ", err)
      })
  }, []);

  if ( cryptos.length < 1 ) return <span>Loading...</span>

  return (
    <>
      <h2>List of Cryptos</h2>
      <ol>
        {
          cryptos.map(({ id, name, priceUsd }) => (
            <li key={ id } >Name: { name }, Price: { priceUsd }</li>
          ))
        }
      </ol>
    </>
  )

}

export default App