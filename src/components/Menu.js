import React from 'react'
import header from '../styles/header.css'

const Menu = () => {
    function myFunction(){
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }
  return (
    <div class='menu_container'>
        <div class="topnav" id="myTopnav">
            <img src='https://breyvtraveler.com/logos/logo1.png' class='logo'/>
            <a href="https://breyvtraveler.com/">Home</a>
            <a href="https://breyvtraveler.com/contact">Contact</a>
            <a href="https://breyvtraveler.com/about">About</a>
            <a href="javascript:void(0);" class="icon" onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>

  )
}

export default Menu
