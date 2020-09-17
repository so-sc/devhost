import React from "react"
import Layout from "../components/layout"
import "../styles/main.scss"
import Landing from "../components/landingPage/landing"
import About from "../components/about/about"
const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
    </Layout>
  )
}

export default IndexPage
