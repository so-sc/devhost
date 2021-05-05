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
    sc: file(relativePath: { eq: "speakers/sc.png" }) {
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
              title="Can Bad Design Kill"
              type="Workshop"
              speaker="Jehad Mohamed"
              speakerImage={data.jehad.childImageSharp.fluid}
              description="In this session we will be talking about design in general and how it has grown from just being used in niche user apps to more sensitive systems that deal with medicine, digital policing, vehicular systems etc where bad UX can have more impact than just the user getting irritated. Now being a part of every such impactful industry - bad design can have unseen ramifications when it comes to effecting safety and health. We'll discuss what is design- how it has grown, followed by Bad Design and in what spectrum bad design becomes dangerous."
              schedule="15th May, 11:00 AM - 12:00 PM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Getting Started with Your Journey into Cloud Security"
              type="Talk"
              speaker="Madhu Akula"
              speakerImage={data.madhu.childImageSharp.fluid}
              description="Most organizations use cloud services in one way or another to run their workloads. In this session, we will see how we can get started on our journey in the vast domain of Cloud Security. Along with an interesting interaction to instil a deeper understanding of the fundamentals of working with the cloud, Madhu will share his experiences too."
              schedule="15th May, 12:00 PM - 1:30 PM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Cruising on the AI wave"
              type="Talk"
              speaker="Siddhant Aggarwal"
              speakerImage={data.sid.childImageSharp.fluid}
              description="We encounter artificial intelligence in almost all our daily tasks: speech-to-text, photo tagging technology, fingerprint recognition, spam classification. We see it contributing to cutting-edge innovations: precision medicine, injury prediction, use-cases like predicting diabetic retinopathy, and autonomous cars. This session will talk about the advancements of AI in the industry, how this wave started, and its future."
              schedule="15th May, 2:30 PM - 3:30 PM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Lift off with Next.js 🚀"
              type="Workshop"
              speaker="Sam Poder"
              speakerImage={data.sam.childImageSharp.fluid}
              description="Next.js is taking over the React galaxy. In this talk we’ll learn the framework through building a website that uses many of Next.js’s core features such as API Routes, ISR & Dynamic Routing."
              schedule="16th May, 10:00 AM - 11:00 AM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Upskill with Hackathon and Communities"
              type="Talk"
              speaker="Siddhart Dayalwal"
              speakerImage={data.siddharth.childImageSharp.fluid}
              description="The prime intent of a community is to acquaint students with the ecosystem (pertaining to the domain of that particular community) and develop skill sets by providing effective training. We are a community which believes in knowledge for all. Join Siddharth in this interactive session to know more about Communities and Hackathons. Hackathons are another fun medium to promote learning. In today's times, the importance of hackathons in the technical sphere has reached new limits."
              schedule="16th May, 2:00 PM - 3:00 PM"
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <EventCard
              title="Super Chat"
              type="Ask Me Anything (AMA)"
              speaker="Super Seniors"
              speakerImage={data.sc.childImageSharp.fluid}
              description="Questioning is an integral part of the learning process. As young developers we bet a gazillion questions cross your mind every day. Well, start making note of those very questions and shoot them at our panel of SOSC alumni/alumnae, who shall attempt to help you to the best of their abilities."
              schedule="16th May, 2:00 PM - 3:00 PM"
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
