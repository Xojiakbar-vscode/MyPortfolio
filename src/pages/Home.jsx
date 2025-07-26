import React, { useEffect, useState } from 'react';
import './Home.css';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {

    const roles = ['Frontend Developer', 'React Developer', 'JavaScript Developer'];
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
          });
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.slice(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                
                if (charIndex + 1 === currentRole.length) {
                    setIsDeleting(true);
                    typingSpeed = 2000;
                }
            } else {
                setText(currentRole.slice(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    typingSpeed = 500;
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <div>
        <div className='home-container' data-aos="fade-down">
            <h2>Xojiakbar Qodirjanov</h2>
            <h3 >
                I'm <span className='typing'>{text}</span>
                <span className='cursor'>|</span>
            </h3>
        </div>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Contact/>
        </div>
    );
};

export default Home;