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

      <section className="speakers">
      <Container>
        <h3 className="section__title">Speakers</h3>
        <SpeakerCard
          image={data.musthak.childImageSharp.fluid}
          speakerName="Grace Ling"
          subTitle="UI/UX Designer"
          description="Grace Ling is a Computer Science Engineering student working towards UX product design. Her goal is to make digital experiences for people to actually enjoy and is extremely passionate about building inclusive communities. Outside of work and school, she creates games and works as a freelance designer, along with managing a blog with a following of over 40,000 to promote healthy living. Grace has been part of almost 40 speaking engagements with audiences ranging from elementary schools to senior-level professionals on topics related to design and career growth. A few of her notable talks were held at AIGA, Figma, Microsoft and the Pakistan Tech Summit."
          git="https://github.com/haxzie"
          linkedin="https://www.linkedin.com/in/graceling/"
          website="https://grace-ling.com/"
        />
        <SpeakerCard
          image={data.musthak.childImageSharp.fluid}
          speakerName="Viral Parmar"
          subTitle="Founder and CEO, ComExpo Cyber Security Foundation"
          description="Viral Parmar, founder and CEO at ComExpo Cyber Security Foundation, a non-profit organization in India, started the world's biggest privacy awareness campaign named 'Logout' and is recognized as one of the prominent speakers to make people aware about privacy and security and has influenced more than 1 million people across the globe. He is famous for his research on 'Cyber Disorder' and 'Who is Spying on You' with expertise in Cyber Crime Investigation, Social Engineering, Web App Penetration Testing, to name a few. He has been working as Reps and Mentor in Mozilla Open Leadership Project for the past 3 years."
          git="https://github.com/haxzie"
          linkedin="https://www.linkedin.com/in/viral-parmar-8402a04a"
          website="https://haxzie.com/"
        />
        <SpeakerCard
          image={data.rose.childImageSharp.fluid}
          speakerName="Gaurav Rai"
          subTitle="Software Developer Engineer"
          description="Gaurav Rai, a software developer engineer at Rivi, is an android and iOS developer who believes in building software that serves a purpose. Having graduated from SRM university with a bachelor's degree in computer science, where he was the secretary of White Hat hacker' club, later on, worked as lead Android developer at ALFHEIMR and as a mentor at The Climber. He was also a speaker of Hour of Code by Code.org."
          git="https://github.com/haxzie"
          linkedin="https://www.linkedin.com/"
          website="https://haxzie.com/"
        />
        <SpeakerCard
          image={data.musthak.childImageSharp.fluid}
          speakerName="Musthaq Ahamad"
          subTitle="UX Engineer and Visual Designer"
          description="Musthaq Ahamad, a UX Engineer and Visual Designer at Locale.ai, is an open-source enthusiast with an eye for detail.  He advocates, designs and builds for the web. He is one of SOSC’s alumni, an ex GitHubEducation Campus Expert, and a mentor to many in the community. Musthaq, as an engineer, emphasises on the importance of actually building to master a skill. He has conducted various workshops and talks on Git and GitHub, Nodeschool and GeoSpatial Analytics Tools, to name a few."
          git="https://github.com/haxzie"
          linkedin="https://linkedin.com/in/haxzie"
          website="https://haxzie.com/"
        />
      </Container>
    </section>
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
              href={linkedin}><img className="speakercard__right__link-left-image" src={Linkedin} alt="linkedin logo" /></a>
          </div>
          <div className="card__right__link-right">
            <a target="_blank"
              rel="noreferrer"
              href={website}><img className="speakercard__right__link-left-image" src={Website} alt="website logo" /></a>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Speakers