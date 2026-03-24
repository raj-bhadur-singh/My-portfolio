import React, { useEffect } from 'react'
import LandingPage from '../components/LandingPage'
import ProjectGallery from '../components/ProjectGallery'
import Skills from '../components/Skills'
import { useLocation } from 'react-router-dom'
import SkillsSection from '../components/SkillsSection'
import ClientProjects from '../components/ClientProjects'
import ClientShowcaseBanner from '../components/ClientShowcaseBanner'

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const el = document.getElementById('client-projects');
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
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
            <ClientShowcaseBanner />
            
            <section id="projects">
                <ProjectGallery />
            </section>

            <Skills />
            <section id="client-projects">
                <ClientProjects limit={4} />
            </section>
            <SkillsSection/>
        </div>
    )
}

export default HomePage