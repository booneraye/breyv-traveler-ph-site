import React from 'react'
import config from '../utils/siteConfig'
import header from '../styles/header.css'

const Menu = () => {

  return (

    <header class="header">
        <a href={config.siteUrl} class="logo"><img src={`${config.siteUrl}/logos/brave_black.png`} class='logos'/></a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><a href={`${config.siteUrl}/about/`}>About</a></li>
            <li><a href={`${config.siteUrl}/biyaheroes`} target='_blank'>Buy Tickets</a></li>
            <li><a href={`${config.siteUrl}/contact/`}>Contact</a></li>
        </ul>
    </header>

  )
}

export default Menu
