import React from "react"
import Container from "../container"
import ScrollAnimation from "react-animate-on-scroll"

const About = () => {
  return (
    <section className="about">
      <Container>
        <h3 className="section__title">About</h3>
        <ScrollAnimation animateIn="fadeIn">
          <div className="about-content">
            <p>
              devhost is the annual flagship event of{" "}
              <a target="_blank" rel="noreferrer" href="https://sosc.org.in/">
                SOSC
              </a>
              . Our prime goal is to bring young and skilled developers from in
              and around Karnataka under the same umbrella. This event aims to
              create a platform to collaborate with various clubs and
              organizations, discuss the newest technologies and trends in the
              IT industry an also train students for the same. devhost:20 claims
              to be a tech extravaganza, and the biggest event under SOSC so
              far.
              <br />
              <br />
              Considering the ongoing pandemic, devhost:20 will be an online
              event.
            </p>
          </div>
        </ScrollAnimation>
        <div className="about-cards">
          <ScrollAnimation animateIn="fadeIn">
            <InfoCard
              cardHeading="Insightful Talks"
              cardInfo="Hear what the experts have to share about a wide range of concepts and technologies. Know more about the recent trends, initiatives, innovations and much more. Expand your knowledge and stand a chance to interact with experts from various technical fields"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <InfoCard
              cardHeading="Exciting Workshops"
              cardInfo="There’s no better way to master a technical skill than to actually get coding. Come join us in a series of three workshops exploring various domains. The workshops involve hands-on learning along with discussion and interaction on a given topic."
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <InfoCard
              cardHeading="Hacktoberfest Hacknight"
              cardInfo="Hack Night is a 28-hour long hackthon organized by Sahyadri Open Source Community (SOSC) in celebration of Hacktoberfest 2020. Hacktoberfest is open to everyone in our global community."
            />
          </ScrollAnimation>
        </div>
      </Container>
    </section>
  )
}

const InfoCard = ({ cardHeading, cardInfo }) => {
  return (
    <div className="card">
      <div className="card-face">
        <div className="card-content">
          <div className="card-content-title">
            <p>{cardHeading}</p>
          </div>
          <div className="card-content-details">{cardInfo}</div>
        </div>
        <div className="card-face-outline">&nbsp;</div>
      </div>
    </div>
  )
}

export default About
