import React from 'react'
import header from '../styles/header.css'

const Menu = () => {
  return (
    <div>
        <label for="show-menu" class="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button">
        <ul id="menu">
            <li><a href="https://breyvtraveler.com/">Home</a></li>
            <li><a href="https://breyvtraveler.com/about/">About ￬</a>
                <ul class="hidden">
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">What We Do</a></li>
                </ul>
            </li>
            <li><a href="https://breyvtraveler.com/">Social Media Accounts ￬</a>
                <ul class="hidden">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagran</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </li>
            <li><a href="https://breyvtraveler.com/biyaheroes" target='_blank'>Buy Tickets</a></li>
            <li><a href="https://breyvtraveler.com/contact/">Contact</a></li>
        </ul>
    </div>
  )
}

export default Menu
