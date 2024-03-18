import React from 'react'

import './Footer.css'
import profile from './profilepic.png'
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
    <div className='footerouterdiv'>
        <div className='profilebox'>
            <img className ='profilepic' src={profile} alt='profile picture'/>
        </div>
        <div className='centered'>
            <h1 className='namebox'>
                AIDAN JOHANSSON
            </h1>
        </div>
        <div className='centered'>
            <a className='lighterlink' href='mailto:aidanjohansson01@gmail.com'>aidanjohansson01@gmail.com</a>
        </div>
        <div className='abouttitle'>
            <h4>ABOUT</h4>
        </div>
        <p>Hi, I'm Aidan. I'm currently studying Computer Science at Northeastern University and working as a Software Development Engineer Intern at <a href='https://aws.amazon.com/'>AWS</a>.</p>
        <div className='iconsbox'>
            <div className='icon'>
                <SocialIcon url="https://github.com/aidanj0" bgColor="#a6d189" style={{ height: 30, width: 30 }}/>
            </div>
            <div className='icon'>
                <SocialIcon url="https://www.linkedin.com/in/aidan-johansson/" bgColor="#e5c890" style={{ height: 30, width: 30 }}/>
            </div>
            <div className='icon'>
                <SocialIcon url="https://www.twitter.com/aidanjohansson/" bgColor="#ef9f76" style={{ height: 30, width: 30 }}/>
            </div>
            <div className='icon'>
                <SocialIcon url="https://www.instagram.com/aidanj0/" bgColor="#e78284" style={{ height: 30, width: 30 }}/>
            </div>
            <div className='icon'>
                <SocialIcon url="https://open.spotify.com/user/ltj67y8dffmxztmkwyus54uqu" bgColor="#ca9ee6" style={{ height: 30, width: 30 }}/>
            </div>
            <div className='icon'>
                <SocialIcon url="mailto:aidanjohansson01@gmail.com" bgColor="#8caaee" style={{ height: 30, width: 30 }}/>
            </div>
        </div>
    </div>
)

export default Footer