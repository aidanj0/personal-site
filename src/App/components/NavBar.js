import React from 'react'

import './NavBar.css'

const NavBar = () => (
    <div class="flex-container">
        <div class ="flex-item flex-item-main"><a href = '../'>AIDAN JOHANSSON</a></div>
        <div class ="flex-item flex-item-rest"><a href = '/about'>ABOUT</a></div>
        <div class ="flex-item flex-item-rest"><a href = '/resume'>RESUME</a></div>
        <div class ="flex-item flex-item-rest"><a href = '/projects'>PROJECTS</a></div>
        <div class ="flex-item flex-item-rest"><a href = '/contact'>CONTACT</a></div>
    </div>
)

export default NavBar