import React from 'react'

import Body from '../components/Body'

import './main.css'

const Home = () => (
    <Body>
        <div className='topdiv'>
            <h1>WELCOME TO THE SITE!</h1>
            <p className ='subdiv'>
                A REACT APPLICATION, DEVELOPED WITH MODERN JAVASCRIPT, BUILT AS A LEARNING EXPERIENCE IN WEB DEVELOPMENT AND DESIGN
            </p>
        </div>
        <div className='middiv'>
            <p>Hi there, thanks for stopping by! Feel free to read more <a href='https://aidanjohansson.com/about'>about me</a>, view my <a href='https://aidanjohansson.com/resume'>resume</a>, <a href='https://aidanjohansson.com/projects'>projects</a>, or <a href='https://aidanjohansson.com/contact'>reach out</a>.</p>
            <p style={{marginTop: "3%"}}>The source code for this site is available <a href='https://github.com/aidanj0/personal-site'>here</a>. The visual design is heavily inspired by Michael D'Angelo's <a href ='https://mldangelo.com/'>personal website</a></p>
        </div>
    </Body>
)

export default Home