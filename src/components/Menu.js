import React from 'react'
import header from '../styles/header.css'
import Helmet from 'react-helmet'

const Menu = () => {
  return (
     <div>
    <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <Helmet>
        <script>
            {
                `
                function myFunction() {
                    var x = document.getElementById("myTopnav");
                    if (x.className === "topnav") {
                        x.className += " responsive";
                    } else {
                        x.className = "topnav";
                    }
                }
                `
            }
        </script>
    </Helmet>
    </div>
  )
}

export default Menu
