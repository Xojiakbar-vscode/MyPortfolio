import React, { useState , useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaBug, FaMobileAlt, FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  const services = [
    {
      icon: <FaTools />,
      title: 'Texnik xizmat',
      description: 'Muammolarni bartaraf etish va texnik qo‘llab-quvvatlash xizmatlari.'
    },
    {
      icon: <FaBug />,
      title: 'Xatoliklarni tuzatish',
      description: 'Tizimdagi xatoliklarni aniqlash va ularni samarali hal qilish.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobil ilovalar',
      description: 'iOS va Android uchun mobil ilovalarni ishlab chiqish.'
    },
    {
      icon: <FaRocket />,
      title: 'Startaplar uchun yechimlar',
      description: 'Startaplaringizni tezkor boshlash uchun kerakli barcha vositalar.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Axborot xavfsizligi',
      description: 'Ma’lumotlaringizni himoya qilish bo‘yicha yuqori darajadagi xizmatlar.'
    },
    {
      icon: <FaCogs />,
      title: 'Moslashtirilgan tizimlar',
      description: 'Sizning ehtiyojlaringizga moslashtirilgan maxsus tizimlar.'
    }
  ];

  return (
    <section id="services" className="services" >
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Xizmatlar</h2>
          <p>
            Biz sizga kerakli barcha zamonaviy xizmatlarni taklif qilamiz. Har bir mijoz uchun individual yondashuv – bizning ustuvorligimiz.
          </p>
        </div>

        <div className="services-grid" data-aos="fade-down">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
