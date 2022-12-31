const CryptoInfo = ({ crypto }) => {

  return (
    <div className="info">
      <div className="main-info">
        <span>Ranking: { crypto.rank }</span>
        <h1>{crypto.name}</h1>
        <span className="symbol">{crypto.symbol}</span>
      </div>
      <div className="details">
        <ul>
          <li className="detail">
            <span className="label">Price: </span>
            <span>{parseFloat(crypto.priceUsd).toFixed(3)}</span>
          </li>
          <li className="detail">
            <span className="label">MaxSupply: </span>
            <span>{parseFloat(crypto.maxSupply).toFixed(3)}</span>
          </li>
          <li className="detail">
            <span className="label">Market Cap (USD): </span>
            <span>{parseFloat(crypto.marketCapUsd).toFixed(3)}</span>
          </li>
          <li className="detail">
            <span className="label">Volume (USD - 24 Hrs.): </span>
            <span>{parseFloat(crypto.volumeUsd24Hr).toFixed(3)}</span>
          </li>
          <li className="detail">
            <span className="label">Variance (24 Hrs.): </span>
            <span className={ parseFloat(crypto.changePercent24Hr) >= 0 ? 'positive' : 'negative' } >
              {parseFloat(crypto.changePercent24Hr).toFixed(3)}%
            </span>
          </li>
          <li>
            <span className="label">Vwap 24 Hrs.: </span>
            <span>{parseFloat(crypto.vwap24Hr).toFixed(3)}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CryptoInfo
