import React, { useState , useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-down">
          <h2>Aloqa</h2>
          <p className="description">
            Siz biz bilan istalgan vaqtda bog'lanishingiz mumkin. Quyida bizning aloqa ma'lumotlarimiz keltirilgan.
          </p>
        </div>

        <div className="contact-container" data-aos="fade-up">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="contact-info-box">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Manzil</h3>
                  <p>A108 Adam ko‘chasi, Nyu-York, NY 535022</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3>Qo‘ng‘iroq qiling</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email yuboring</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Ismingiz" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email manzilingiz" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Mavzu" className="form-input" />
              </div>

              <div className="form-group">
                <textarea placeholder="Xabaringizni yozing..." rows="5" className="form-textarea"></textarea>
              </div>

              <div className="form-footer">
                <div className="footer-left">
                  <p className="keyboard-shortcut">Klaviatura qisqa tugmalari</p>
                  <p className="map-data">Xarita maʼlumotlari ©2023 Google</p>
                </div>
                <button type="submit" className="submit-btn">Xabar Yuborish</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
