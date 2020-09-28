import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ScrollAnimation from "react-animate-on-scroll"

import { FaAngleDown } from "react-icons/fa"

const Landing = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      desktop: file(relativePath: { eq: "BG_2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid

  useEffect(() => {
    let vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty("--vh", `${vh}px`)
  })

  return (
    <section className="landing">
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={"landing-section"}
      >
        <div className="landing-section-overlay">
          <div className="landing-content">
            <div className="landing-content-title">
              <ScrollAnimation animateIn="fadeIn">
                <p>
                  dev<span>host</span> : 20
                </p>
              </ScrollAnimation>
            </div>
            <div className="landing-content-tagline">
              <ScrollAnimation animateIn="fadeIn">
                <p>May the source be with you</p>
              </ScrollAnimation>
            </div>
            <div className="landing-content-dates">
              <ScrollAnimation animateIn="fadeIn">
                <p>October 01 - October 02</p>
              </ScrollAnimation>
            </div>
            <div className="landing-content-button">
              <a
                target="_blank"
                rel="noreferrer"
                className="btn btn_violet"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2-AID4jmYyNQQvFHHNd2fcMuxfZ-fo2McHbx_4__jbYpWYQ/viewform"
              >
                Register Now
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn btn_violet-outline"
                href="https://hacknight.netlify.app/"
              >
                Explore Hackathon
              </a>
            </div>
            <div className="scroll__container">
              <FaAngleDown className="scroll-indicator" />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Landing
