import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "sponsors/github.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      devfolio: file(relativePath: { eq: "sponsors/devfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bugsee: file(relativePath: { eq: "sponsors/bugsee.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clouds: file(relativePath: { eq: "sponsors/clouds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CH: file(relativePath: { eq: "sponsors/coffeehours.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fold: file(relativePath: { eq: "sponsors/fold.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GMC: file(relativePath: { eq: "sponsors/GMC.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matic: file(relativePath: { eq: "sponsors/matic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portis: file(relativePath: { eq: "sponsors/portis.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      staise: file(relativePath: { eq: "sponsors/staise.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tss: file(relativePath: { eq: "sponsors/tss.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Wolfram: file(relativePath: { eq: "sponsors/Wolfram.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="sponsors">
      <Container>
        <div className="section__title">Sponsors</div>
        <div className="sponsors__images">
          <a target="_blank" rel="noreferrer" href="https://github.com/">
            <Img
              className="sponsors__images-size"
              fluid={data.github.childImageSharp.fluid}
              alt="Github"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://devfolio.co/">
            <Img
              className="sponsors__images-size"
              fluid={data.devfolio.childImageSharp.fluid}
              alt="Devfolio"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.bugsee.com/">
            <Img
              className="sponsors__images-size"
              fluid={data.bugsee.childImageSharp.fluid}
              alt="Bugsee"
            />
          </a>{" "}
          <a target="_blank" rel="noreferrer" href="/">
            <Img
              className="sponsors__images-size"
              fluid={data.clouds.childImageSharp.fluid}
              alt="Clouds"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coffeehours.club/"
          >
            <Img
              className="sponsors__images-size"
              fluid={data.CH.childImageSharp.fluid}
              alt="Coffee Hours"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://fold.money/">
            <Img
              className="sponsors__images-size"
              fluid={data.fold.childImageSharp.fluid}
              alt="Fold"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://matic.network/">
            <Img
              className="sponsors__images-size"
              fluid={data.matic.childImageSharp.fluid}
              alt="Matic"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.portis.io/">
            <Img
              className="sponsors__images-size"
              fluid={data.portis.childImageSharp.fluid}
              alt="Portis"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://givemycertificate.com/"
          >
            <Img
              className="sponsors__images-size"
              fluid={data.GMC.childImageSharp.fluid}
              alt="Give my Certificate"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <Img
              className="sponsors__images-size"
              fluid={data.staise.childImageSharp.fluid}
              alt="Staise"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.wolfram.com/">
            <Img
              className="sponsors__images-size"
              fluid={data.Wolfram.childImageSharp.fluid}
              alt="Wolfram Language"
            />
          </a>
        </div>
        <h1 className="sponsors__title">Official Gifting Partner</h1>
        <div className="sponsors__images">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thesouledstore.com/"
          >
            {" "}
            <Img
              className="sponsors__images-size"
              fluid={data.tss.childImageSharp.fluid}
              alt="the Souled Store  "
            />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Sponsors
