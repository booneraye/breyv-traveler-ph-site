import React from 'react'
import header from '../styles/header.css'
import ScriptTag from 'react-script-tag';

const Menu = () => {
  return (
    <div>
        <div class="topnav" id="myTopnav">
            <a href="https://breyvtraveler.com/" class="active">Home</a>
            <a href="https://breyvtraveler.com/contact">Contact</a>
            <a href="https://breyvtraveler.com/about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <ScriptTag isHydrating={true} type="text/javascript" src='https://breyvtraveler.com/js/header.js' />
    </div>

  )
}

export default Menu
