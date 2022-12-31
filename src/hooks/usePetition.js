import {useEffect, useState} from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const usePetition = (endpoint) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const fetchCrypto = async() => {
      try {
        const response = await axios.get(`${API_URL}${endpoint}`)
        setData( response.data.data )
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.error(e)
      }
    }

    fetchCrypto().then()
  }, [])

  return [ data, loading ]
}

export default usePetition