import React from 'react'
import header from '../styles/header.css'

const Menu = () => {
  return (
      <header>
    <div class="container">
      <div class="logo-box">
        <a href="/">
          <img src="../static/logos/logo1.png">
        </a>
      </div>
      <nav>
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">work</a></li>
        <li><a href="">product</a></li>
        <li><a href="">about</a></li>
        <li><a href="">contact</a></li>
     </ul>
    </nav>
    </div>
  </header>
  )
}

export default Menu
