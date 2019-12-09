import React from 'react'
import header from '../styles/header.css'

const Menu = () => {

  return (

    <header class="header">
        <a href="https://breyvtraveler.com/" class="logo"><img src='https://breyvtraveler.com/logos/brave_black.png' class='logos'/></a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><a href="https://breyvtraveler.com/about/">About</a></li>
            <li><a href="https://breyvtraveler.com/biyaheroes" target='_blank'>Buy Tickets</a></li>
            <li><a href="https://breyvtraveler.com/contact/">Contact</a></li>
        </ul>
    </header>

  )
}

export default Menu
