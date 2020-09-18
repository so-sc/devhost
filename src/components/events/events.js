import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
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
    }
  `)
  return (
    <section className="events">
      <Container>
        <h3 className="section__title">Events</h3>
        <div className="events-holder">
          <EventCard image={data.Event_1.childImageSharp.fluid} />
          <EventCard image={data.Event_1.childImageSharp.fluid} />
          <EventCard image={data.Event_1.childImageSharp.fluid} />
        </div>
      </Container>
    </section>
  )
}

const EventCard = ({ image }) => {
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
            <div className="event-details-info">
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

export default Events
