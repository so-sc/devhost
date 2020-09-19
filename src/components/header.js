import React from "react"

import Logo from "../images/logo.svg"
import Container from "./container"

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header__container">
          <div className="header__container_logo">
            <img className="header__container_logo-devhost" src={Logo} alt="logo" />
      </div>
          <ul className="header__container_navigation">
            <li className="header__container_navigation-item">Community Guidelines</li>
            <li className="header__container_navigation-item">Code of Conduct</li>
            <li className="header__container_navigation-item">Contact</li>
      </ul>
        </div>

      </Container> 
    </header>
  )
}


export default Header
