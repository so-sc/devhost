import React from "react"
import Container from "../container"
const About = () => {
  return (
    <section className="About-section">
      <Container>
        <div className="about">
          <div className="about-header"></div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="about-cards">
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

const InfoCard = () => {
  return (
    <div className="card">
      <div className="card-outline">
        <div className="card-face">
          <div className="card-content">
            <div className="card-content-title">
              <p>Exciting Workshops</p>
            </div>
            <div className="card-content-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
