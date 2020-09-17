import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import BackgroundImage from "gatsby-background-image"

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

  return (
    <section className="landing">
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={"landing-section"}
      >
        <div className="landing-section-overlay">
          <Header />
          <div className="landing-content">
            <div className="landing-content-title">
              <p>
                dev<span>host</span> : 20
              </p>
            </div>
            <div className="landing-content-tagline">
              <p>May the source be with you</p>
            </div>
            <div className="landing-content-dates">
              <p>October 01 - October 02</p>
            </div>
            <div className='landing-content-button'>
              <a target="_blank" rel="noopener" className='btn btn_violet' href='https://devfolio.co/'>Register with Devfolio</a>
              <a target="_blank" rel="noopener" className='btn btn_violet-outline' href='https://devfolio.co/'>Explore Events</a>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Landing
