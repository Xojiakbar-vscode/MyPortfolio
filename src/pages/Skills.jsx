import React, { useState , useEffect} from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 75 },
    { name: 'PHP', percentage: 80 },
    { name: 'WORDPRESS/CMS', percentage: 90 },
    { name: 'PHOTOSHOP', percentage: 55 }
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Ko‘nikmalar</h2>
          <p className="description">
            Uning mas’uliyati tufayli u ba’zan muammolardan qochib qutulishga majbur bo‘ladi.
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
