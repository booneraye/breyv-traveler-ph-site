import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import BookingForm from '../components/BookingForm'


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
        		<BookingForm/>
      		</Container>
    	</Layout>
  )
}

export default Biyaheroes
