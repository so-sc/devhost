import React from "react"
import Container from "../container"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

// //icons
// import Github from "../../images/github.svg"
// import Linkedin from "../../images/linkedin.svg"
// import Website from "../../images/link.svg"

const ChiefGuest = () => {
    const data = useStaticQuery(graphql`{
  dc: file(relativePath: {eq: "speakers/dc.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <section className="speakers">
      <Container>
        <h3 className="section__title">Chief Guest</h3>
        <SpeakerCard
          image={data.dc.childImageSharp.gatsbyImageData}
          speakerName="Dr. Rajendra K. V., IAS"
          subTitle="Deputy Commissioner, Dakshina Kannada"
          description="Dr Rajendra hails from Theerthahalli,  Shivamogga. After completing MBBS, he appeared for UPSC and served in the Indian Railways. In 2013, he cleared the UPSC exam with 32nd rank. He then served as the Assistant Commissioner of Puttur in 2015.."
          // git="/"
          // linkedin="https://www.linkedin.com/in/madhuakula/"
          // website="https://madhuakula.com/"
        />
      </Container>
    </section>
  );
}

const SpeakerCard = ({
  image,
  speakerName,
  subTitle,
  description,
  git,
  linkedin,
  website,
}) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="speakercard">
        <div className="speakercard__left">
          <GatsbyImage image={image} className="speakercard__left-image" alt="speakers" />
          <h2 className="speakercard__left-title">{speakerName}</h2>
          <h3 className="speakercard__left-subtitle">{subTitle}</h3>
        </div>
        <div className="speakercard__right">
          <h3 className="speakercard__right-title">About</h3>
          <h3 className="speakercard__right-description">{description}</h3>

          {/* <div className="speakercard__right__link">
            <div className="card__right__link-left">
              <a target="_blank" rel="noreferrer" href={git}>
                <img
                  className="speakercard__right__link-left-github"
                  src={Github}
                  alt="github logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href={linkedin}>
                <img
                  className="speakercard__right__link-left-image"
                  src={Linkedin}
                  alt="linkedin logo"
                />
              </a>
            </div>
            <div className="card__right__link-right">
              <a target="_blank" rel="noreferrer" href={website}>
                <img
                  className="speakercard__right__link-left-image"
                  src={Website}
                  alt="website logo"
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ChiefGuest;
