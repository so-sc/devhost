import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
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
      grace: file(relativePath: { eq: "speakers/grace-ling.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gaurav: file(relativePath: { eq: "speakers/gaurav-rai.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rumaan: file(relativePath: { eq: "speakers/rumaan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      VP: file(relativePath: { eq: "speakers/speaker.jpeg" }) {
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
              title="Introduction to UI/UX"
              type="Talk"
              speaker="Grace Ling"
              speakerImage={data.grace.childImageSharp.fluid}
              description="User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience. Learn about this exciting field in this 1 hour insightful session."
              schedule="1 OCT 2020, 11:30 AM - 12:30 PM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="How to make the right products to win at a Hackathon"
              type="Talk"
              speaker="Gaurav Rai"
              speakerImage={data.gaurav.childImageSharp.fluid}
              description="
              Hackathons are proving grounds for new ideas. They also provide a platform to push a developer to put forth their best creative and problem-solving skills while also considering time constraints. Hackathons are the new best way to showcase one’s technical skills. Learn about how to build products for a hackathon in this session."
              schedule="1 OCT 2020, 2:00 PM - 3:00 PM"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Daily things often ignored but can end you up being pawned"
              type="Workshop"
              speaker="Viral Parmar"
              speakerImage={data.VP.childImageSharp.fluid}
              description="Cybersecurity is important because it encompasses everything that pertains to protecting our sensitive data, personally identifiable information (PII), protected health information (PHI), personal information, intellectual property, data, and governmental and industry information systems from theft and damage attempted. Find out more from our expert."
              schedule="2 OCT 2020, 10:00 AM - 11:00 AM"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Intro to Prototyping with Figma"
              type="Workshop"
              speaker="Musthaq Ahamad"
              speakerImage={data.musthak.childImageSharp.fluid}
              description="Figma is a web-first, collaborative, and powerful vector design tool. It's arguably the best tool in the design industry used to design wireframes and prototypes. In this workshop, we'll learn the basics, learn how to create design systems and build a full-fledged prototype using Figma."
              schedule="2 OCT 2020, 11:30AM - 12:30 PM"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Jazz Up your Websites with CSS"
              type="Talk"
              speaker="Rumaan Khalander"
              speakerImage={data.rumaan.childImageSharp.fluid}
              description="Your website can speak volumes just through its design. That’s where CSS comes into play. While HTML handles your web page's structure, CSS sits on top of HTML's raw structure to dress it up and make everything look pretty. This is why HTML and CSS are foundational to all web design. Learn CSS tips and tricks in this one hour session.
              "
              schedule="2 OCT 2020, 2:00PM - 3:00 PM"
            />
          </ScrollAnimation>
        </div>
      </Container>
    </section>
  )
}

const EventCard = ({
  description,
  speaker,
  speakerImage,
  schedule,
  type,
  title,
}) => {
  return (
    <div className="event-card">
      <p className="event-card__event-type">{type}</p>
      <p className="event-card__event-title">{title}</p>
      <p className="event-card__event-time">{schedule}</p>
      <div className="event-card__description">{description}</div>
      <div className="event-card__speaker">
        <Img
          className="event-card__speaker-image"
          fluid={speakerImage}
          alt="speakers"
        />
        <h3 className="event-card__speaker-name">{speaker}</h3>
      </div>
    </div>
  )
}

export default Events
