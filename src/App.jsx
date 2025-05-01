import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MyRoute from './route/MyRoute'
import FloatingWhatsApp from './components/FloatingWhatsApp'
function App() {
  return (
    <>
      <Header />
      <FloatingWhatsApp />
      <div className='body'>
        <MyRoute />
      </div>
      <Footer />
    </>
  )
}

export default App
