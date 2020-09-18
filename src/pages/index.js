import React from "react"
import Layout from "../components/layout"
import "../styles/main.scss"
import Landing from "../components/landingPage/landing"
import About from "../components/about/about"
import Speakers from "../components/speakers/speakers"
import Events from "../components/events/events"
const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Speakers />
      <Events />
    </Layout>
  )
}

export default IndexPage
