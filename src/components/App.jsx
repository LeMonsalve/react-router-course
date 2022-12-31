import React from 'react'
import Menu from "./shared/Menu.jsx";
import {Outlet} from "react-router-dom";
import '../styles/App.css'

const App = () => {
  return (
    <div className="app-container">
      <Menu />

      <Outlet />
    </div>
  )
} 

export default App