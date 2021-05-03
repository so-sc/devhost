import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Association = () => {


  const data = useStaticQuery(graphql`
  query {
    campus: file(relativePath: { eq: "association/campus.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    django: file(relativePath: { eq: "association/django.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hack: file(relativePath: { eq: "association/hack.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    node: file(relativePath: { eq: "association/node.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    mozilla: file(relativePath: { eq: "association/mozilla.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    mlsa: file(relativePath: { eq: "association/mlsa.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    wtm: file(relativePath: { eq: "association/womentm.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    dsc: file(relativePath: { eq: "association/dsc.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    gwc: file(relativePath: { eq: "association/gwc.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    ccscem: file(relativePath: { eq: "association/ccscem.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
  }
`)


  return (
    <section className="association">
      <Container>
        <div className="section__title">In Association</div>
        <div className="association__images">
          <Img className="association__images-size" fluid={data.campus.childImageSharp.fluid} alt="Campus Expert" />
          <Img className="association__images-size" fluid={data.django.childImageSharp.fluid} alt="Django Girls" />
          <Img className="association__images-size" fluid={data.node.childImageSharp.fluid} alt="Node School" />
          <Img className="association__images-size" fluid={data.hack.childImageSharp.fluid} alt="Hack Club" />
          <Img className="association__images-size" fluid={data.mozilla.childImageSharp.fluid} alt="Mozilla Campus Club" />
          <Img className="association__images-size" fluid={data.mlsa.childImageSharp.fluid} alt="Microsoft Learn Student Ambassador" />
          <Img className="association__images-size" fluid={data.wtm.childImageSharp.fluid} alt="Women Tech Maker" />
          <Img className="association__images-size" fluid={data.dsc.childImageSharp.fluid} alt="Developer Student Clubs" />
          <Img className="association__images-size" fluid={data.gwc.childImageSharp.fluid} alt="Girls Who Code" />
          <Img className="association__images-size" fluid={data.ccscem.childImageSharp.fluid} alt="Girls Who Code" />
        </div>
      </Container>
    </section>
  )
}

export default Association