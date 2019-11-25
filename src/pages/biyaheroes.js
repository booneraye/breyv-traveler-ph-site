import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Biyaheroes = ({ data }) => {
  const postNode = {
    title: `Biyaheroes - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Biyaheroes - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="biyaheroes" customTitle />

      <Container>
        <PageTitle>Biyaheroes</PageTitle>
        <div id="biyaheroes-widget-container">
	        <div id="biyaheroes-widget-brave-traveler-ph-566db44c6bb873ae1cd8662e67708577e916940fa1e37aff4965b1a33299f688eda1b27133d1c338ddfe2c9c20bacd2f">
	        </div><Helmet>
	        <script src='https://dev-biz.biyaheroes.com/widget/brave-traveler-ph/566db44c6bb873ae1cd8662e67708577e916940fa1e37aff4965b1a33299f688eda1b27133d1c338ddfe2c9c20bacd2f'></script></Helmet>
        </div>
      </Container>
    </Layout>
  )
}

export default Biyaheroes
