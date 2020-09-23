import React from "react"

import Logo from "../images/logo.svg"
import Container from "./container"

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header__container">
          <div className="header__container_logo">
            <img
              className="header__container_logo-devhost"
              src={Logo}
              alt="logo"
            />
          </div>
          <ul className="header__container_navigation">
            <li className="header__container_navigation-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/so-sc/code-of-conduct"
              >
                Community Guidelines
              </a>
            </li>
            <li className="header__container_navigation-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/so-sc/code-of-conduct"
              >
                Code of Conduct
              </a>
            </li>
            <li className="header__container_navigation-item">Contact</li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header