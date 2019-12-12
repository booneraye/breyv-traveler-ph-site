import React from 'react'
import config from '../utils/siteConfig'
import footer from '../styles/footer.css'

const Footer = () => (

    <footer class="footer-distributed">
        <div class="footer-left">
            <img src={`${config.siteUrl}/logos/brave_traveler_ph.png`} class='logos'/> <br/>
            <p class="footer-links">
		        <a href={config.siteUrl}>Home</a>  · <a href={`${config.siteUrl}/about`}>About</a> · <a href={`${config.siteUrl}/privacy-policy`}>Privacy Policy</a>  · <a href={`${config.siteUrl}/contact/`}>Contact</a>
		    </p>

		    <p class="footer-company-name">{config.siteTitle} &copy; 2019</p>
		</div>

		<div class="footer-center">
		    <div>
		        <i class="fa fa-map-marker"></i>
		        <p><span>Balete Street</span> Caloocan City, NCR</p>
		    </div>
		    <div>
		        <i class="fa fa-phone"></i>
		        <p>+63 9099353050</p>
		    </div>
            <div>
		        <i class="fa fa-envelope"></i>
		        <p><a href="mailto:connect@breyvtraveler.com">connect@breyvtraveler.com</a></p>
		    </div>

		</div>

		<div class="footer-right">
		    <p class="footer-company-about">
		        <span>About</span>
	            Brave traveler ph started as a dream that travelling, especially in the Philippines will soon become easier and adventurous by giving the people tips, encouragement, ideas and support on how to explore the beauty of our own country. It is an idealism that you don't have need a lot of funds or money to be able to travel, you just need to be BRAVE enough to do so.
		    </p>
            <div class="footer-icons">
 		        <a href={config.userFacebook}><i class="fa fa-facebook"></i></a>
		        <a href={config.userInstagram}><i class="fa fa-instagram"></i></a>
		    </div>
		</div>

	</footer>
)

export default Footer
