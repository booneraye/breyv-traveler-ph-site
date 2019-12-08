import React from 'react'
import footer from '../styles/footer.css'

const Footer = () => (
    <footer class="footer-distributed">
        <div class="footer-left">
            <h3>Brave Traveler PH</h3>
            <p class="footer-links">
		        <a href="#">Home</a>
	            ·
		        <a href="#">Blog</a>
	            ·
		        <a href="#">Pricing</a>
	            ·
		        <a href="#">About</a>
	            ·
		        <a href="#">Faq</a>
	            ·
		        <a href="#">Contact</a>
		    </p>

		    <p class="footer-company-name">brave traveler ph &copy; 2019</p>
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
		        <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
		    </div>
		</div>

		<div class="footer-right">
		    <p class="footer-company-about">
		        <span>About</span>
	            Brave traveler ph started as a dream that travelling, especially in the Philippines will soon become easier and adventurous by giving the people tips, encouragement, ideas and support on how to explore the beauty of our own country. It is an idealism that you don't have need a lot of funds or money to be able to travel, you just need to be BRAVE enough to do so.
		    </p>

		    <div class="footer-icons">
 		        <a href="#"><i class="fa fa-facebook"></i></a>
		        <a href="#"><i class="fa fa-twitter"></i></a>
		        <a href="#"><i class="fa fa-linkedin"></i></a>
		        <a href="#"><i class="fa fa-github"></i></a>
		    </div>
		</div>

	</footer>
)

export default Footer
