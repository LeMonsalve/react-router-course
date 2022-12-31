import React from 'react'
import ReactDOM from 'react-dom/client'
import CryptoList from './components/crypto/CryptoList.jsx'
import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import CryptoPage from "./components/crypto/CryptoPage.jsx";
import Profile from "./components/user/Profile.jsx";
import {UserContextProvider} from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } >
          <Route index element={ <Home /> } />
        </Route>

        <Route path="/crypto" element={ <App /> } >
          <Route index element={ <CryptoList /> } />
          <Route path=':id' element={ <CryptoPage /> } />
        </Route>

        <Route path="/user" element={ <App /> } >
          <Route index element={ <Profile /> } />
        </Route>

        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
