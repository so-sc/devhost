import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from "gatsby-background-image"
import ScrollAnimation from "react-animate-on-scroll"
import { Link } from "gatsby"

import { FaAngleDown } from "react-icons/fa"

const Landing = () => {
  // const data = useStaticQuery(graphql`
  //   query aboutQuery {
  //     desktop: file(relativePath: { eq: "BG_2.png" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  // const imageData = data.desktop.childImageSharp.fluid

  return (
    <section className="landing">
      {/* <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={"landing-section"}
      > */}
        <div className="landing-section-overlay">
          <div className="landing-content">
            <div className="landing-content-title">
              <ScrollAnimation animateIn="fadeIn">
                <p>
                  dev<span>host</span> : 22
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
                <p>20th - 22nd May</p>
              </ScrollAnimation>
            </div>
            <div className="landing-content-button">
              <Link to="https://youtu.be/j4wDRdo4LOc" className="btn btn_violet-outline">
                Watch Live Now
              </Link>
            </div>
            <div className="scroll__container">
              <FaAngleDown className="scroll-indicator" />
            </div>
          </div>
        </div>
      {/* </BackgroundImage> */}
    </section>
  )
}

export default Landing
