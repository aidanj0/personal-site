import React from 'react'

import './NavBar.css'

const NavBar = () => (
    <div className="flex-container">
        <div className ="flex-item flex-item-main"><a href = '../'>AIDAN JOHANSSON</a></div>
        <div className ="flex-item flex-item-rest"><a href = '/about'>ABOUT</a></div>
        <div className ="flex-item flex-item-rest"><a href = '/resume'>RESUME</a></div>
        <div className ="flex-item flex-item-rest"><a href = '/projects'>PROJECTS</a></div>
        <div className ="flex-item flex-item-rest"><a href = '/contact'>CONTACT</a></div>
    </div>
)

export default NavBar