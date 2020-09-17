import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

//icons
import Github from "../../images/github.svg"
import Linkedin from "../../images/linkedin.svg"
import Website from "../../images/link.svg"

const Speakers = () => {

  const data = useStaticQuery(graphql`
  query {
    musthak: file(relativePath: { eq: "speakers/Musthak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rose: file(relativePath: { eq: "speakers/halfRose.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Container>
      <section className="speakers">
        <h3 className="section__title">Speakers</h3>
        <SpeakerCard
          image={data.musthak.childImageSharp.fluid}
          speakerName="Musthak Ahamed"
          subTitle="Github Campus expert"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper tellus. Nulla tempor at dolor quis blandit. Vestibulum eu magna aliquet, aliquet tellus non, posuere magna. Vestibulum in lacus vitae enim pretium luctus nec nec purus. Nullam dolor felis, semper eu ipsum et, vulputate porta nunc. Pellentesque ullamcorper eu nulla nec."
          git="https://github.com/haxzie"
          linkedin="https://www.linkedin.com/"
          website="https://haxzie.com/"
        />
        <SpeakerCard
          image={data.rose.childImageSharp.fluid}
          speakerName="Half Rose"
          subTitle="Github Campus expert"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel semper tellus. Nulla tempor at dolor quis blandit. Vestibulum eu magna aliquet, aliquet tellus non, posuere magna. Vestibulum in lacus vitae enim pretium luctus nec nec purus. Nullam dolor felis, semper eu ipsum et, vulputate porta nunc. Pellentesque ullamcorper eu nulla nec."
          git="https://github.com/haxzie"
          linkedin="https://www.linkedin.com/"
          website="https://haxzie.com/"
        />
      </section>
    </Container>
  )
}

const SpeakerCard = ({ image, speakerName, subTitle, description, git, linkedin, website }) => {
  return (
    <div className="speakercard">
      <div className="speakercard__left">
        <Img className="speakercard__left-image" fluid={image} alt="speakers" />
        <h2 className="speakercard__left-title">{speakerName}</h2>
        <h3 className="speakercard__left-subtitle">{subTitle}</h3>
      </div>
      <div className="speakercard__right">
        <h3 className="speakercard__right-title">About</h3>
        <h3 className="speakercard__right-description">{description}</h3>

        <div className="speakercard__right__link">
          <div className="card__right__link-left">
            <a target="_blank"
              rel="noreferrer"
              href={git}><img className="speakercard__right__link-left-github" src={Github} alt="github logo" /></a>
            <a target="_blank"
              rel="noreferrer"
              href={linkedin}><img src={Linkedin} alt="linkedin logo" /></a>
          </div>
          <div className="card__right__link-right">
            <a target="_blank"
              rel="noreferrer"
              href={website}><img src={Website} alt="website logo" /></a>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Speakers