import React from 'react'
import Announcement from './announcement/Announcement'
import BAP from './bap/BAP'
import CallToVideo from './call-to-video/CallToVideo'
import Contact from './contact/Contact'
import Cta from './cta/Cta'
import HeroSection from './hero-section/HeroSection'
import OurUniversity from './our-university/OurUniversity'

function Layout() {
    return (
        <div>
            <HeroSection />
            <BAP />
            <OurUniversity />
            <Cta />
            <CallToVideo />
            <Announcement />
            <Contact />
        </div>
    )
}

export default Layout
