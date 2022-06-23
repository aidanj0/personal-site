import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'

const Navigation = () => (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={
                    <Home />
                } />

                <Route path="/about" element={
                    <About />
                } />

                <Route path="/resume" element={
                    <Resume />
                } />

                <Route path="/projects" element={
                    <Projects />
                } />

                <Route path="/contact" element={
                    <Contact />
                } />

            </Routes>

        </BrowserRouter>
    )

export default Navigation