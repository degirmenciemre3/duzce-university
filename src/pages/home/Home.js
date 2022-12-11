import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Home = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Home