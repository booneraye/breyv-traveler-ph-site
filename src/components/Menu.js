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
    <div>
        <div class="topnav" id="myTopnav">
            <a href="https://breyvtraveler.com/" class="active">Home</a>
            <a href="https://breyvtraveler.com/contact">Contact</a>
            <a href="https://breyvtraveler.com/about">About</a>
            <a href="javascript:void(0);" class="icon" onClick='myFunction()'>
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>

  )
}

export default Menu
