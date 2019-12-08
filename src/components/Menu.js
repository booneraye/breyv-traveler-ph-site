import React from 'react'
import header from '../styles/header.css'
import ScriptTag from 'react-script-tag';
import headerJS ffrom '../js/header.js'

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
    </div>
    <ScriptTag isHydrating={true} type="text/javascript" src={headerJS} />
  )
}

export default Menu
