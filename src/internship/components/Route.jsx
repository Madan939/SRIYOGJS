import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from '../pages/About'
import Testimonials from '../pages/Testimonials'
import Certificates from '../pages/Certificates'
import Contact from '../pages/Contact'
import Tos from '../pages/Tos'
import FAQs from '../pages/FAQs'
import Privacy from '../pages/Privacy'
import Disclaimer from '../pages/Disclaimer'
import Apply from '../pages/Apply'
import Eligibility from '../pages/Eligibility'
import ScrollToTop from './ScrollToTop'
function Navbar() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/eligibility' element={<Eligibility/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tos' element={<Tos/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>

    </Routes>
    </>
  )
}

export default Navbar
