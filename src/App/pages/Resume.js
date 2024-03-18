import React from 'react'

import Body from '../components/Body'

import './main.css'
import './resume.css'

// Text items
const expn1title = 'Software Engineer Co-op - SLS Consulting, LLC'
const exp0title = 'Software Development Engineer Intern - Amazon Web Services (AWS)'
const exp1title = 'Data Science Co-op - Contributor Development Partnership (CDP)'
const exp1bullet1 = 'Performing data cleaning, aggregation, and EDA on a range of datasets'
const exp1bullet2 = 'Researching and contrasting several data mining toolkits and products for specific use cases'
const exp1bullet3 = 'Detecting key predictors for potential public media donors using predictive modeling in Python'
const exp2title = 'Teaching Assistant, Discrete Structures (CS 1800) - Northeastern University'
const exp2bullet1 = 'Hosted weekly recitation sessions to review course material with students'
const exp2bullet2 = 'Met with students in office hours to answer questions and provide assistance'
const exp2bullet3 = 'Provided feedback and scoring on honors assignments'
const exp3title = 'Council Member - Surprise Youth Council'
const exp3bullet1 = 'Collaborated with a project group to write and film a series of educational videos for teenagers'
const exp3bullet2 = 'Planned, hosted, and volunteered at a haunted house, community day of service, and other city-sponsored events'
const exp3bullet3 = 'Met with the council for biweekly work sessions and discussions regarding community events and needs'
const exp4title = 'Jury Foreperson, Bailiff - Surprise Youth Justice Project'
const exp4bullet1 = 'Hosted Maricopa County Teen Court, a diversion program for juvenile defenders in the county'
const exp4bullet2 = 'Participated in court as a bailiff, jury foreperson, and juror'
const exp4bullet3 = 'Worked to provide restorative justice to the defendant, victim, and the community'

// Returns the title for a section in the resume
const section = (title) => (
    <div className='sectiondiv'>
        <h3>{title}</h3>
    </div>
)

// Returns the title for a position in 'Experience'
const exptitle = (titletext) => (
    <div>
        <h4 className='exptitle'>{titletext}</h4>
    </div>
)

// Returns a bullet in 'Experience'
const expitem = (bullet) => (
    <li>
        {bullet}
    </li>
)

// Education section
const education = (
    <div>
        {section('EDUCATION')}
        <p className='collegetitle'>
            B.S. Computer Science, Concentration in Systems
        </p>
        <p className='collegedesc'>
            Northeastern University, Khoury College of Computer Sciences. 2020-2025
        </p>
    </div>
)

// Experience section
const experience = (
    <div>
        {section('EXPERIENCE')}
        <div>
            {exptitle(expn1title)}
            <p className='collegedesc'>
            September 2023 - Present
            </p>
            <ul>
                {expitem("todo :)")}
            </ul>
            {exptitle(exp0title)}
            <p className='collegedesc'>
            May 2023 - August 2023
            </p>
            <ul>
                {expitem("todo :)")}
            </ul>
            {exptitle(exp1title)}
            <p className='collegedesc'>
            July 2022 - Present
            </p>
            <ul>
                {expitem(exp1bullet1)}
                {expitem(exp1bullet2)}
                {expitem(exp1bullet3)}
            </ul>
            {exptitle(exp2title)}
            <p className='collegedesc'>
            September 2021 – December 2021
            </p>
            <ul>
                {expitem(exp2bullet1)}
                {expitem(exp2bullet2)}
                {expitem(exp2bullet3)}
            </ul>
            {exptitle(exp3title)}
            <p className='collegedesc'>
            August 2019 - July 2020
            </p>
            <ul>
                {expitem(exp3bullet1)}
                {expitem(exp3bullet2)}
                {expitem(exp3bullet3)}
            </ul>
            {exptitle(exp4title)}
            <p className='collegedesc'>
            August 2019 - July 2020
            </p>
            <ul>
                {expitem(exp4bullet1)}
                {expitem(exp4bullet2)}
                {expitem(exp4bullet3)}
            </ul>
        </div>
    </div>
)

// Skills section
const skills = (
    <div>
        {section('SKILLS')}
        <p className='skillsline'>
            <b>Languages: </b>Python, C++, Java, R, JavaScript, SQL, C, HTML, CSS
        </p>
        <p className='skillsline'>
            <b>Libraries/Frameworks: </b>React, Matplotlib, NumPy, pandas, SciPy, tidyverse
        </p>
        <p className='skillsline'>
            <b>Developer Tools: </b>IntelliJ, Git, mySQL, VSCode, Eclipse
        </p>
        <p className='skillsline'>
            <b>Applications: </b>Tableau, Google Suite, Microsoft Office, Salesforce
        </p>
    </div>
)

const Resume = () => (
    <Body>
        <div className='topdiv'>
            <h1>RESUME</h1>
        </div>
        <div className='middiv'>
            {education}
            {experience}
            {skills}
        </div>
    </Body>
)

export default Resume