import React from 'react'

import Body from '../components/Body'

import './main.css'
import './resume.css'

// Text items
const exp1title = 'Contributor Development Partnership (CDP) - Data Analyst Co-op'
const exp1bullet1 = ''
const exp1bullet2 = ''
const exp1bullet3 = ''
const exp2title = 'Northeastern University - Teaching Assistant, Discrete Structures (CS 1800)'
const exp2bullet1 = 'Hosted weekly recitation sessions to review course material with students'
const exp2bullet2 = 'Met with students in office hours to answer questions and provide assistance'
const exp2bullet3 = 'Provided feedback and scoring on honors assignments'
const exp3title = 'Surprise Youth Council - Council Member'
const exp3bullet1 = 'Collaborated with a project group to write and film a series of educational videos for teenagers'
const exp3bullet2 = 'Planned, hosted, and volunteered at a haunted house, community day of service, and other city-sponsored events'
const exp3bullet3 = 'Met with the council for biweekly work sessions and discussions regarding community events and needs'
const exp4title = 'Surprise Youth Justice Project - Jury Foreperson, Bailiff'
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
            B.S. Computer Science
        </p>
        <p className='collegedesc'>
            Northeastern University, Khoury College of Computer Sciences. 2020-2024
        </p>
    </div>
)

// Skills section
/*
const skills = (
    <div>
        {section('SKILLS')}
    </div>
)
*/

// Experience section
const experience = (
    <div>
        {section('EXPERIENCE')}
        <div>
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

const Resume = () => (
    <Body>
        <div className='topdiv'>
            <h1>RESUME</h1>
        </div>
        <div className='middiv'>
            {education}
            {experience}
        </div>
    </Body>
)

export default Resume