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
  
  const booking = `<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); width: 500px">
			<div id="biyaheroes-widget-container">
				<div id="biyaheroes-widget-brave-traveler-ph-be70440e47bf3c0fda285ed94e9508e17b4857f53608d36fd64f88ac32bb376d78128207cc4b443b9b6d763f2afd8705">
				</div>	
				<script type="application/javascript" src="https://biz.biyaheroes.com/widget/brave-traveler-ph/be70440e47bf3c0fda285ed94e9508e17b4857f53608d36fd64f88ac32bb376d78128207cc4b443b9b6d763f2afd8705"></script>
			</div>
		</div>`;

  return (
	  <Layout>
      		<Helmet>
      			<title>{`Biyaheroes - ${config.siteTitle}`}</title>
      		</Helmet>
      		<SEO postNode={postNode} pagePath="biyaheroes" customTitle />
	
      		<Container>
        		<PageTitle>Biyaheroes</PageTitle>
        		<div dangerouslySetInnerHTML={{ __html: booking }}/>
      		</Container>
    	</Layout>
  )
}

export default Biyaheroes
