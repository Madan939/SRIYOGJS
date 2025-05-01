import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Career from '../pages/Career';
import About from '../pages/About';
import Team from '../pages/Team';
import How from '../pages/How';
import Press from '../pages/Press';
import Faq from '../pages/Faq';
import Vmgo from "../pages/Vmgo";
import Welcome from '../pages/Welcome';
import Certificate from '../pages/Certificate';
import Fonts from '../pages/Fonts';
import Tos from '../pages/Tos';
import Privacy from '../pages/Privacy';
import Services from '../pages/Services';
import Features from '../pages/Features';
import Timeline from '../pages/Timeline';
import Feedback from '../pages/Feedback';
import Media from '../pages/Media';
import Video from '../pages/Video';
import Cities from '../pages/Cities';
import Contact from '../pages/Contact';
import Pagenotfound from '../pages/Pagenotfound';

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Career />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/how' element={<How />} />
        <Route path='/press' element={<Press />} />
        <Route path='/vmgo' element={<Vmgo />} />
        <Route path='/video' element={<Video />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/media' element={<Media />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/features' element={<Features />} />
        <Route path='/services' element={<Services />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/tos' element={<Tos />} />
        <Route path='/fonts' element={<Fonts />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/city' element={<Cities/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/app" />} />
        <Route path='/app' element={<Pagenotfound/>}/>
      </Routes >
    </>
  )
}

export default MyRoute