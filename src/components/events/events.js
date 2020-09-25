import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      Event_1: file(relativePath: { eq: "Event_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      musthak: file(relativePath: { eq: "speakers/Musthak.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      halfRose: file(relativePath: { eq: "speakers/halfRose.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="events">
      <Container>
        <h3 className="section__title">Events</h3>
        <div className="events-holder">
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              image={data.Event_1.childImageSharp.fluid}
              speaker="Musthak Ahamed"
              speakerImage={data.musthak.childImageSharp.fluid}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              image={data.Event_1.childImageSharp.fluid}
              speaker="Half Rose"
              speakerImage={data.halfRose.childImageSharp.fluid}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
            />
          </ScrollAnimation>
        </div>
      </Container>
    </section>
  )
}

const EventCard = ({ image, description, speaker, speakerImage }) => {
  return (
    <div className="Event-card">
      <div className="Event-card-base">
        <div className="Event-card-base-left"></div>
        <div className="Event-card-base-right">
          <Img className="" fluid={image} alt="speakers" />
        </div>

        <div className="Event-card-base-content">
          <p className="event-type">Workshop</p>
          <p className="event-title">Flutter 101</p>
          <p className="event-time">11:00 AM - 12:00 PM</p>
          <div className="event-details">
            <div className="event-details-info">{description}</div>
            <div className="event-details-speaker">
              <Img
                className="event-details-speaker-image"
                fluid={speakerImage}
                alt="speakers"
              />
              <h3 className="event-details-speaker-name">{speaker}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
