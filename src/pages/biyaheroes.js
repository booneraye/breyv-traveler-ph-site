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
    const bookingService = `<script type="application/javascript" src="https://biz.biyaheroes.com/widget/brave-traveler-ph-website/0c246ad427714b5190e9b9651b1ec51cbbe656078c47a39e5159a788ecbf3dced973716cba12a16f95900c6694e87c77"></script>`

  return (
	  <Layout>
      		<Helmet>
      			<title>{`Biyaheroes - ${config.siteTitle}`}</title>
      		</Helmet>
      		<SEO postNode={postNode} pagePath="biyaheroes" customTitle />

      		<Container>
        		<PageTitle>Biyaheroes</PageTitle>
                <div dangerouslySetInnerHTML={{__html: bookingService }} />
                <BookingForm/>

      		</Container>
    	</Layout>
  )
}

export default Biyaheroes
