import '../../styles/CryptoList.css'
import CryptoItem from "./CryptoItem.jsx"
import Loading from "../shared/Loading.jsx";
import usePetition from "../../hooks/usePetition.js";

const CryptoList = () => {

  const [ cryptos, loadingCryptos ] = usePetition(`/assets`)

  if ( loadingCryptos ) return <Loading />

  return cryptos && (
    <div className="crypto-list-container">
      <h2>List of Cryptos</h2>
      <div className="crypto-container">
        {
          cryptos.map(({ id, name, priceUsd, changePercent24Hr, symbol }) => (
            <CryptoItem key={ id }
                        id={ id }
                        name={ name }
                        priceUsd={ priceUsd }
                        changePercent24Hr={ changePercent24Hr }
                        symbol={ symbol } />
          ))
        }
      </div>
    </div>
  )

}

export default CryptoList