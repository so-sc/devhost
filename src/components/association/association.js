import React from "react"
import Container from "../container"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"


const Association = () => {


  const data = useStaticQuery(graphql`{
  campus: file(relativePath: {eq: "association/campus.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  django: file(relativePath: {eq: "association/django.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  hack: file(relativePath: {eq: "association/hack.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  node: file(relativePath: {eq: "association/node.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  mozilla: file(relativePath: {eq: "association/mozilla.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  mlsa: file(relativePath: {eq: "association/mlsa.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  wtm: file(relativePath: {eq: "association/womentm.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  dsc: file(relativePath: {eq: "association/dsc.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  gwc: file(relativePath: {eq: "association/gwc.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  ccscem: file(relativePath: {eq: "association/ccscem.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)


  return (
    <section className="association">
      <Container>
        <div className="section__title">In Association</div>
        <div className="association__images">
          <GatsbyImage
            image={data.campus.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Campus Expert" />
          <GatsbyImage
            image={data.django.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Django Girls" />
          <GatsbyImage
            image={data.node.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Node School" />
          <GatsbyImage
            image={data.hack.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Hack Club" />
          <GatsbyImage
            image={data.mozilla.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Mozilla Campus Club" />
          <GatsbyImage
            image={data.mlsa.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Microsoft Learn Student Ambassador" />
          <GatsbyImage
            image={data.wtm.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Women Tech Maker" />
          <GatsbyImage
            image={data.dsc.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Developer Student Clubs" />
          <GatsbyImage
            image={data.gwc.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Girls Who Code" />
          <GatsbyImage
            image={data.ccscem.childImageSharp.gatsbyImageData}
            className="association__images-size"
            alt="Girls Who Code" />
        </div>
      </Container>
    </section>
  );
}

export default Association