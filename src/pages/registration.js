import React from "react"
import Layout from "../components/layout"

import SearchEngineOptimization from "../components/seo"
import { siteMetadata } from "../../gatsby-config"

import "../styles/main.scss"
import GoogleForm from "../components/google-form/google-form"

const RegistrationPage = () => {
  return (
    <Layout>
      <SearchEngineOptimization
        title={siteMetadata.title}
        description={siteMetadata.description}
        image={siteMetadata.image}
        url={siteMetadata.url}
      />
      <GoogleForm />
    </Layout>
  )
}

export default RegistrationPage
