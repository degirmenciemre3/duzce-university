import React from 'react'
import Announcement from './announcement/Announcement'
import BAP from './bap/BAP'
import CallToVideo from './call-to-video/CallToVideo'
import Contact from './contact/Contact'
import Cta from './cta/Cta'
import Footer from './footer/Footer'
import Header from './header/Header'
import HeroSection from './hero-section/HeroSection'
import OurUniversity from './our-university/OurUniversity'

function Layout() {
    return (
        <div>
            <Header />
            <HeroSection />
            <BAP />
            <OurUniversity />
            <Cta />
            <CallToVideo />
            <Announcement />
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout
