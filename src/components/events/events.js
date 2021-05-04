import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

const Events = () => {
  const data = useStaticQuery(graphql`
  query {
    madhu: file(relativePath: { eq: "speakers/madhu-akula.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sid: file(relativePath: { eq: "speakers/sidhant-agarwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sam: file(relativePath: { eq: "speakers/sam-poder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siddharth: file(relativePath: { eq: "speakers/siddharth-dayalwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jehad: file(relativePath: { eq: "speakers/jehad.png" }) {
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
              title="Getting started with your journey into Cloud Security"
              type="Talk"
              speaker="Madhu Akula"
              speakerImage={data.madhu.childImageSharp.fluid}
              description="
              Most organizations in one way or another already using cloud services to run their workloads. In this session, we will see how we can learn to get started our journey with Cloud Security by understanding the fundamentals of working with the cloud, and the pathway. Madhu will share his getting started approaches from his experience to learn and practice using online resources and references. By the end of the session, the audience will get enough resources and references to go deep dive into building their knowledge by practicing and learning further."
              schedule="Coming Soon"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Cruising on the AI wave"
              type="Talk"
              speaker="Siddhant Aggarwal"
              speakerImage={data.sid.childImageSharp.fluid}
              description="From reel life to real, artificial intelligence is revolutionising the way things work, one click at a time. In this session we'll be learning some core concepts of AI so that you can have smooth sailing ahead in your journey towards mastering AI."
              schedule="Coming Soon"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Lift off with Next.js 🚀"
              type="Workshop"
              speaker="Sam Poder"
              speakerImage={data.sam.childImageSharp.fluid}
              description="Next.js is taking over the React galaxy. In this talk we’ll learn the framework through building a website that uses many of Next.js’s core features such as API Routes, ISR & Dynamic Routing."
              schedule="Coming Soon"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Upskill with hackathon and communities"
              type="Talk"
              speaker="Siddhart Dayalwal"
              speakerImage={data.siddharth.childImageSharp.fluid}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada mi eget congue eleifend. Aenean gravida eu ligula eu lobortis. Phasellus velit velit, lacinia ultrices dolor at, scelerisque imperdiet libero. Integer sed diam at est dictum euismod. Quisque id odio sed tortor accumsan aliquam aliquam at nunc. Donec vestibulum finibus condimentum"
              schedule="Coming Soon"  
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Jazz Up your Websites with CSS"
              type="Talk"
              speaker="Jehad Mohamed"
              speakerImage={data.jehad.childImageSharp.fluid}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada mi eget congue eleifend. Aenean gravida eu ligula eu lobortis. Phasellus velit velit, lacinia ultrices dolor at, scelerisque imperdiet libero. Integer sed diam at est dictum euismod. Quisque id odio sed tortor accumsan aliquam aliquam at nunc. Donec vestibulum finibus condimentum."
              schedule="Coming Soon"
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
