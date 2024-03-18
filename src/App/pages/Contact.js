import React from 'react'

import Body from '../components/Body'
import { SocialIcon } from 'react-social-icons';

import './main.css'

const Contact = () => (
    <Body>
        <div className='topdiv'>
            <h1>CONTACT</h1>
        </div>
        <div className='middiv'>
            <p>Feel free to send me an email at <a href='mailto:aidanjohansson01@gmail'>aidanjohansson01@gmail.com</a> or reach out to any of my socials!</p>
            <div className='contacticonbox'>
            <div className='contacticon'>
                <SocialIcon url="https://github.com/aidanj0" bgColor="#a6d189" style={{ height: 25, width: 25 }}/>
            </div>
            <div className='contacticon'>
                <SocialIcon url="https://www.linkedin.com/in/aidan-johansson/" bgColor="#e5c890" style={{ height: 25, width: 25 }}/>
            </div>
            <div className='contacticon'>
                <SocialIcon url="https://www.twitter.com/aidanjohansson/" bgColor="#ef9f76" style={{ height: 25, width: 25 }}/>
            </div>
            <div className='contacticon'>
                <SocialIcon url="https://www.instagram.com/aidanj0/" bgColor="#e78284" style={{ height: 25, width: 25 }}/>
            </div>
            <div className='contacticon'>
                <SocialIcon url="https://open.spotify.com/user/ltj67y8dffmxztmkwyus54uqu" bgColor="#ca9ee6" style={{ height: 25, width: 25 }}/>
            </div>
            <div className='contacticon'>
                <SocialIcon url="mailto:aidanjohansson01@gmail.com" bgColor="#8caaee" style={{ height: 25, width: 25 }}/>
            </div>
        </div>
        </div>
    </Body>
)

export default Contact