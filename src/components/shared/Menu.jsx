import '../../styles/Menu.css'
import {NavLink} from "react-router-dom"

const Menu = () => {
  
  // const user = useContext(UserContext)

  return (
    <nav className="main-menu">
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/crypto" >Crypto list</NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu

// <li><NavLink to="/user" >Profile of { user.name }</NavLink></li>
