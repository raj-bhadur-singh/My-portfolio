import React, { useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import AboutOverview from '../components/AboutOverview'
import Services from '../components/Services'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect(() => {
        const scrollToSection = location.state?.scrollTo;
        if (scrollToSection) {
            const el = document.getElementById(scrollToSection);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100); // delay for smooth routing
            }
        }
    }, [location]);

    return (
        <div className='bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e]'>
            <AboutMe />
            <AboutOverview />
            <section id="experience">
                <Experience />
            </section>
            <Services />
        </div>
    )
}

export default AboutPage