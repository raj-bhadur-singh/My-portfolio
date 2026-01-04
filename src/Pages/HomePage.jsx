import React, { useEffect } from 'react'
import LandingPage from '../components/LandingPage'
import ProjectGallery from '../components/ProjectGallery'
import Skills from '../components/Skills'
import { useLocation } from 'react-router-dom'
import SkillsSection from '../components/SkillsSection'
import ClientProjects from '../components/ClientProjects'

const HomePage = () => {
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
        <div>
            <LandingPage />
            <section id="projects">
                <ProjectGallery />
            </section>
            <ClientProjects limit={3} />
            <Skills />
            {/* <SkillsSection/> */}
        </div>
    )
}

export default HomePage