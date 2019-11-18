import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const About = ({ data }) => {
  const postNode = {
    title: `About - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>About</PageTitle>
        <div>Many people are hindered to travel and explore their own country not because the lack of funds but because the lack of confidence to go outside their own boxes and eagerness to see the world - the bigger world that might have.</div>
      </Container>
    </Layout>
  )
}

export default About
