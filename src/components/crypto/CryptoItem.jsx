import React from 'react';
import '../../styles/CryptoItem.css'
import {Link} from "react-router-dom";

const CryptoItem = ({ id, name, priceUsd, changePercent24Hr, symbol }) => {

  const changePercentRounded = () => {
    return parseFloat( changePercent24Hr ).toFixed(3)
  }

  const priceUsdRounded = () => {
    return parseFloat( priceUsd ).toFixed(2)
  }

  return (
    <div className="crypto" >
      <Link to={`/crypto/${id}`} >
        <div className="crypto-header" >
          <h3>{ name }</h3>
          <h3 className="crypto-symbol" >{ symbol }</h3>
        </div>
      </Link>
      <div className="info">
        <p><span className="label">Price: </span>{ priceUsdRounded() }</p>
        <p className={ changePercentRounded() >= 0 ? "positive" : "negative" } >
          <span className="label">Change 24H: </span>
          { changePercentRounded() }%
        </p>
      </div>

    </div>
  )
};

export default CryptoItem;