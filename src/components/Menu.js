import React from 'react'
import header from '../styles/header.css'

const Menu = () => {
  return (
    <div>
    <label for="show-menu" class="show-menu">Show Menu</label>
    <input type="checkbox" id="show-menu" role="button">
        <ul id="menu">
        <li><a href="#">Home</a></li>
        <li>
            <a href="#">About ￬</a>
            <ul class="hidden">
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">What We Do</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Portfolio ￬</a>
            <ul class="hidden">
                <li><a href="#">Photography</a></li>
                <li><a href="#">Web & User Interface Design</a></li>
                <li><a href="#">Illustration</a></li>
            </ul>
        </li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </div>

  )
}

export default Menu
