import React from "react"

import Logo from "../images/logo.svg"
import Container from "./container"

const Header = () => {
  return (
    <header>
      <Container>
      <div className="header_logo">
        <img className="header_logo-devhost" src={Logo} alt="logo" />
      </div>
      <ul className="header_navigation">
        <li className="header_navigation-item">Community Guidelines</li>
        <li className="header_navigation-item">Code of Conduct</li>
        <li className="header_navigation-item">Contact</li>
      </ul>
      </Container> 
    </header>
  )
}


export default Header
