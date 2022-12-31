import {useParams} from "react-router-dom"
import Loading from "../shared/Loading.jsx"
import CryptoInfo from "./partials/CryptoInfo.jsx";
import CryptoHistory from "./partials/CryptoHistory.jsx";
import '../../styles/CryptoPage.css'
import usePetition from "../../hooks/usePetition.js";

const CryptoPage = () => {

  const params = useParams()

  let [ crypto, loadingCrypto ] = usePetition(`/assets/${ params['id'] }`)
  const [ history, loadingHistory ] = usePetition(`/assets/${ params['id'] }/history?interval=d1`)

  if (loadingCrypto || loadingHistory) return <Loading />

  return (
    <div className="crypto-page-container">
      { crypto && <CryptoInfo crypto={crypto}/> }
      { history && <CryptoHistory history={history} /> }
    </div>
  )
}

export default CryptoPage
