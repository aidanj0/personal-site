import React from 'react'

import Body from '../components/Body'

import './main.css'
import './resume.css'

const education = (
    <div>
        <div className='sectiondiv'>
            <h3>EDUCATION</h3>
        </div>
        <p className='collegetitle'>
            B.S. Computer Science
        </p>
        <p className='collegedesc'>
            Northeastern University, Khoury College of Computer Sciences. 2020-2024
        </p>
    </div>
)

const projects = (
    <div>
        <div className='sectiondiv'>
            <h3>PROJECTS</h3>
        </div>
        <div>
            <h4>Transit System Database Web App &nbsp;|&nbsp; JavaScript, React, SQL, Java, HTML, CSS</h4>
            <ul>
                <li>
                Designed a web-based application used to interact with data in a city’s public transit system
                </li>
                <li>
                Employed object-relational mapping to allow for interaction between the frontend and backend
                </li>
                <li>
                Programmed the ability to create, delete, and update data in a mySQL Server for transit users, cards, and tickets
                </li>
            </ul>
            <h4>Nenana Ice Classic Analysis & Prediction &nbsp;|&nbsp; R</h4>
            <ul>
                <li>
                Analyzed historical weather data to predict when the Tanana River ice will break in Nenana, Alaska
                </li>
                <li>
                Performed data cleaning, aggregation, and EDA on a range of datasets from Nenana and nearby towns
                </li>
                <li>
                Created a linear regression model and ran a stepwise model selection to improve predictors
                </li>
                <li>
                Verified the model through k-fold validation and explored the relation of attributes through dimension reduction
                </li>
            </ul>
            <h4>Image Processor &nbsp;|&nbsp; Java, Swing</h4>
            <ul>
                <li>
                Built an image-processing application capable of resizing, filtering, and transforming images of various file types
                </li>
                <li>
                Utilized the MVC design pattern to allow for a flexible implementation with multiple view and controller options
                </li>
                <li>
                Implemented a Swing GUI for finding, loading, viewing, processing, and saving pictures
                </li>
            </ul>
        </div>
    </div>
)

const skills = (
    <div className='sectiondiv'>
        <h3>SKILLS</h3>
    </div>
)

const experience = (
    <div>
        <div className='sectiondiv'>
            <h3>EXPERIENCE</h3>
        </div>

        <div>
        <h4 className='exptitle'>Contributor Development Partnership (CDP) - Data Analyst Co-op </h4>
            <p className='collegedesc'>
            July 2022 - Present
            </p>
            <ul>
                <li>
                 
                </li>
                <li>
                 
                </li>
                <li>
                 
                </li>
            </ul>
            <h4 className='exptitle'>Northeastern University - Teaching Assistant, Discrete Structures (CS 1800) </h4>
            <p className='collegedesc'>
            September 2021 – December 2021
            </p>
            <ul>
                <li>
                Hosted weekly recitation sessions to review course material with students
                </li>
                <li>
                Met with students in office hours to answer questions and provide assistance
                </li>
                <li>
                Provided feedback and scoring on honors assignments
                </li>
            </ul>
            <h4 className='exptitle'>Surprise Youth Council - Council Member</h4>
            <p className='collegedesc'>
            August 2019 - July 2020
            </p>
            <ul>
                <li>
                Collaborated with a project group to write and film a series of educational videos for teenagers
                </li>
                <li>
                Planned, hosted, and volunteered at a haunted house, community day of service, and other city-sponsored events
                </li>
                <li>
                Met with the council for biweekly work sessions and discussions regarding community events and needs
                </li>
            </ul>
            <h4 className='exptitle'>Surprise Youth Justice Project - Jury Foreperson, Bailiff</h4>
            <p className='collegedesc'>
            August 2019 - July 2020
            </p>
            <ul>
                <li>
                Hosted Maricopa County Teen Court, a diversion program for juvenile defenders in the county
                </li>
                <li>
                Participated in court as a bailiff, jury foreperson, and juror
                </li>
                <li>
                Worked to provide restorative justice to the defendant, victim, and the community
                </li>
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
            {projects}
        </div>
    </Body>
)

export default Resume