import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

//icons
import Github from "../../images/github.svg"
import Linkedin from "../../images/linkedin.svg"
import Website from "../../images/link.svg"

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query {
      madhu: file(relativePath: { eq: "speakers/madhu-akula.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sid: file(relativePath: { eq: "speakers/sidhant-agarwal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sam: file(relativePath: { eq: "speakers/sam-poder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      siddharth: file(relativePath: { eq: "speakers/siddharth-dayalwal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jehad: file(relativePath: { eq: "speakers/jehad.png" }) {
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
          image={data.madhu.childImageSharp.fluid}
          speakerName="Madhu Akula"
          subTitle="Creator of Kubernetes Goat"
          description="Madhu Akula is the creator of Kubernetes Goat. He is also a  published author and cloud native security researcher. He is an active member of international security, devops and cloud native communities. He frequently speaks and runs training sessions at security events and conferences around the world including DEFCON, BlackHat USA, USENIX LISA, O’Reilly Velocity, GitHub Satellite event, Appsec EU, All Day DevOps, DevSecCon and multiple others. He is also the co-author of Security Automation with Ansible2 which is listed as a technical resource by Red Hat Ansible."
          git="https://github.com/madhuakula/"
          linkedin="https://www.linkedin.com/in/madhuakula/"
          website="https://madhuakula.com/"
        />
        <SpeakerCard
          image={data.sid.childImageSharp.fluid}
          speakerName="Siddhant Agarwal"
          subTitle="Program Coordinator at Google India"
          description='Siddhant was a program coordinator at Google,India. He is also one of ACM’s distinguished speakers and an Intel SoftwareInnovator. Being an avid public speaker, he has spoken at more than 200+ national and international forums impacting over 50K individuals in the last 4-5 years. He loves working with startups and helping them scale in User Experience and improve their designs.'
          git="https://github.com/sidagarwal04/"
          linkedin="https://www.linkedin.com/in/sidagarwal04/"
          website="https://about.me/siddhantagarwal/"
        />
        <SpeakerCard
          image={data.sam.childImageSharp.fluid}
          speakerName="Sam Poder"
          subTitle="Hackclub Lead, Founder of the Singapore STEM Club"
          description="Sam, a high schooler in Singapore, finds joy in building ✨ jazzy 🌈 media experiences for people to enjoy. He is a massive fan of open source and collaborating with others to make things. In his community, he works hard to introduce students from all backgrounds to technology and support them." 
          git="https://github.com/sampoder/"
          linkedin="https://sg.linkedin.com/in/sam-poder"
          website="https://sampoder.com"
        />
        <SpeakerCard
          image={data.siddharth.childImageSharp.fluid}
          speakerName="Siddharth Dayalwal"
          subTitle="Community Development Intern at SAWO labs"
          description="Siddharth Dayalwal is a Community Development Intern at SAWO labs,GitHub Campus Expert ,Microsoft Learn Student Ambassador, AngelHack Student Ambassador,Coding Blocks ~ HackerEarth Ambassador and Former Progate Community Intern."
          git="/"
          linkedin="/"
          website="https://www.instagram.com/siddharth_hacks/"
        />
        <SpeakerCard
          image={data.jehad.childImageSharp.fluid}
          speakerName="Jehad Mohamed"
          subTitle="UI/UX Designer at MobStac"
          description="Jehad Mohamed is a Computer Science graduate who has been dabbling with computer vision and the vast domain of design for the past few years and has loved every bit of it. His design journey includes interning at Canva and free lancing for multiple renowned companies, to name a few.  He wants to help build tools that allow non-designers to create beautiful designs."
          git="/"
          linkedin="https://in.linkedin.com/in/jehad-ddx/"
          website="https://jehadmohamedz.wixsite.com/meep/"
        />
      </Container>
    </section>
  )
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
          <Img
            className="speakercard__left-image"
            fluid={image}
            alt="speakers"
          />
          <h2 className="speakercard__left-title">{speakerName}</h2>
          <h3 className="speakercard__left-subtitle">{subTitle}</h3>
        </div>
        <div className="speakercard__right">
          <h3 className="speakercard__right-title">About</h3>
          <h3 className="speakercard__right-description">{description}</h3>

          <div className="speakercard__right__link">
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
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Speakers
