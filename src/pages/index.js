import React from "react"
import Layout from "../components/layout"
import "../styles/main.scss"
import Landing from "../components/landingPage/landing"
import About from "../components/about/about"
import Speakers from "../components/speakers/speakers"
const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Speakers />
    </Layout>
  )
}

export default IndexPage
