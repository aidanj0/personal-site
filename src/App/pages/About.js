import React from 'react'

import Body from '../components/Body'

import './main.css'

const blurb = "I grew up near Phoenix, AZ, spending much of my time running with my high school's cross country and track & field teams and volunteering with local youth groups. I'm currently studying at Northeastern University, pursuing a Computer Science major with a concentration in Systems. Since this past fall semester, I've been working as a Data Science Co-op at CDP, leveraging machine learning and data engineering for the betterment of public media. In Summer 2023 I'll be working as a Software Development Engineering Intern at AWS."

const About = () => (
    <Body>
        <div className='topdiv'>
            <h1>ABOUT ME</h1>
        </div>
        <div className='middiv'>
            <p>{blurb}</p>
        </div>
    </Body>
)

export default About