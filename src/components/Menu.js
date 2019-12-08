import React from 'react'
import omegaCSS from '../styles/assets/omega.css'
import omegaJS from './styles/assets/js/omega.js'

const Menu = () => {
  return (
      <div id="omega">
  <div id="omega-content">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="omega-links">
      <a href="#" class="button">Link 1</a>
      <a href="#" class="button button-outline ">Link 2</a>
    </div>

  </div>
  <button id="omega-button">&#9776;</button>
  <div id="omega-sidebar">
    <div id="omega-sidebar-header"></div>
    <div id="omega-sidebar-body"></div>
  </div>
  <div id="omega-overlay"></div>
</div>
  )
}

export default Menu
