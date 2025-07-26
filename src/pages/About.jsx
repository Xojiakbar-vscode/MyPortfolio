import React, { useState , useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import img from "../assets/rasm.jpg";

const About = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <section id="about" className="about" >
      <div className="container">
        <div className="section-title" data-aos="fade-down">
          <h2>Men haqimda</h2>
          <p className="description">
            Magnam dolores commodi suscipit. Zaruriyat tug‘ilganda, u muammolardan qochib qutuladi. 
            Ba'zan u yoqimli bo‘lsa-da, bu muhim emas. Har kim o‘z istagiga ko‘ra harakat qiladi. 
            Va hech kim qarshilik qilolmaydi. Chunki u o‘z ishiga sodiq va ehtiyotkorlik bilan ish tutadi.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={img} alt="Profile" data-aos="fade-up"/>
          </div>

          <div className="about-info" data-aos="fade-up">
            <h3>UI/UX Dizayner &amp; Web Dasturchi</h3>
            <p className="info-text">
              Mening ismim — [Ismingiz]. Men foydalanuvchi interfeysi va tajribasi (UI/UX) dizayni hamda 
              web dasturlash sohalarida tajribaga egaman. Ilm-fan va texnologiyaga qiziqishim meni shu yo‘nalishga olib keldi.
            </p>

            <div className="details">
              <div className="details-column">
                <ul>
                  <li><strong>Tug‘ilgan kun:</strong> 23 Sentyabr 2005</li>
                  <li><strong>Yosh:</strong> 20</li>
                  <li><strong>Veb-sayt:</strong> www.example.com</li>
                  <li><strong>Daraja:</strong> Bakalavr</li>
                </ul>
              </div>
              <div className="details-column">
                <ul>
                  <li><strong>Telefon:</strong> +998 20 014 66 67</li>
                  <li><strong>Email:</strong> xojiakbarqodirjanov30@gmail.com</li>
                  <li><strong>Shahar:</strong> Namangan, Uzbekistan</li>
                  <li><strong>Freelance:</strong> Mavjud</li>
                </ul>
              </div>
            </div>

            <p className="additional-info">
              Men o‘z ishiga mas’uliyat bilan yondashadigan, doimo yangilikka intiladigan insonman. 
              Har qanday vazifani mukammal bajarishga harakat qilaman. 
              Mijozlar bilan ishlashda aniq va tushunarli muloqotga alohida e’tibor beraman. 
              Har doim yangi bilimlarni o‘rganishga va o‘z ustimda ishlashga tayyorman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
