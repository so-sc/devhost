import React from "react"
import Container from "../container"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

const Sponsors = () => {
  const data = useStaticQuery(graphql`{
  github: file(relativePath: {eq: "sponsors/github.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  devfolio: file(relativePath: {eq: "sponsors/devfolio.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  bugsee: file(relativePath: {eq: "sponsors/bugsee.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  clouds: file(relativePath: {eq: "sponsors/clouds.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  CH: file(relativePath: {eq: "sponsors/coffeehours.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  fold: file(relativePath: {eq: "sponsors/fold.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  GMC: file(relativePath: {eq: "sponsors/GMC.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  matic: file(relativePath: {eq: "sponsors/matic.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  portis: file(relativePath: {eq: "sponsors/portis.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  staise: file(relativePath: {eq: "sponsors/staise.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  tss: file(relativePath: {eq: "sponsors/tss.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
  Wolfram: file(relativePath: {eq: "sponsors/Wolfram.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <section className="sponsors">
      <Container>
        <div className="section__title">Previous Sponsors</div>
        <div className="sponsors__images">
          <a target="_blank" rel="noreferrer" href="https://github.com/">
            <GatsbyImage
              image={data.github.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://devfolio.co/">
            <GatsbyImage
              image={data.devfolio.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Devfolio" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.bugsee.com/">
            <GatsbyImage
              image={data.bugsee.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Bugsee" />
          </a>{" "}
          <a target="_blank" rel="noreferrer" href="/">
            <GatsbyImage
              image={data.clouds.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Clouds" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coffeehours.club/"
          >
            <GatsbyImage
              image={data.CH.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Coffee Hours" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://fold.money/">
            <GatsbyImage
              image={data.fold.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Fold" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://matic.network/">
            <GatsbyImage
              image={data.matic.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Matic" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.portis.io/">
            <GatsbyImage
              image={data.portis.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Portis" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://givemycertificate.com/"
          >
            <GatsbyImage
              image={data.GMC.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Give my Certificate" />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <GatsbyImage
              image={data.staise.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Staise" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.wolfram.com/">
            <GatsbyImage
              image={data.Wolfram.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="Wolfram Language" />
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
            <GatsbyImage
              image={data.tss.childImageSharp.gatsbyImageData}
              className="sponsors__images-size"
              alt="the Souled Store  " />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Sponsors
