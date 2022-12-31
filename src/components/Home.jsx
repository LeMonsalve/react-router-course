import {Link} from "react-router-dom"
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Hi! Welcome to LeMonsalve Coin Market</h1>
      <p className="subtitle">Meet the top 100 cryptos more used</p>
      <Link to="/crypto" className="link" >See crypto coins</Link>
    </div>
  )
}

export default Home
