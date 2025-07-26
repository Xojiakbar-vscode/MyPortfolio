import React, { useState , useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Resume.css';

const Resume = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Rezyume</h2>
          <p className="description">
            Og‘ir vaziyatlarda ham mas’uliyat bilan ish olib boradigan. Zarur holatlarda qiyinchiliklardan
            chiqib ketishni biladigan, qat’iyatli va professionallikni qadrlaydigan insonman.
          </p>
        </div>

        <div className="resume-content" data-aos="fade-down">
          <div className="resume-column">
            <h3 className="resume-title">Umumiy ma'lumot</h3>
            <div className="resume-item">
              <h4>BRANDON JOHNSON</h4>
              <p>
                <em>
                  Innovatsion fikrlovchi va muddatlarga qat’iy amal qiluvchi grafik dizayner.
                  3+ yillik tajribaga ega bo‘lib, foydalanuvchi markazli raqamli va chop etiladigan
                  marketing materiallarini ilk g‘oyadan tortib to yakuniy natijagacha ishlab chiqadi.
                </em>
              </p>
              <ul>
                <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Ta'lim</h3>
            <div className="resume-item">
              <h4>GRAFIК DIZAYN BO‘YICHA MAGISTR DARAJASI</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Texnologiya Instituti, Rochester, NY</em></p>
              <p>
                O‘ziga xos va samarali yondashuv bilan vaqtni to‘g‘ri boshqarish, ijodiy fikr va amaliy ko‘nikmalarni
                uyg‘unlashtirish orqali samarali natijalarga erishganman.
              </p>
            </div>
            <div className="resume-item">
              <h4>GRAFIК DIZAYN BO‘YICHA BAKALAVR DARAJASI</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Texnologiya Instituti, Rochester, NY</em></p>
              <p>
                Ta’lim davomida dizaynning nazariy va amaliy jihatlarini chuqur o‘rganib, murakkab dizayn
                loyihalarini mustaqil bajarishga tayyor bo‘lganman.
              </p>
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-title">Ish tajribasi</h3>
            <div className="resume-item">
              <h4>KATTA GRAFIК DIZAYNER</h4>
              <h5>2019 - Hozirgi vaqtgacha</h5>
              <p><em>Experion, New York, NY</em></p>
              <ul>
                <li>Grafik, maket va ishlab chiqarish materiallarini loyihalash va joriy qilishda yetakchilik qildim</li>
                <li>7 kishilik dizayn jamoasiga topshiriqlarni taqsimlab, loyihaning barcha jihatlari bo‘yicha maslahatlar berdim</li>
                <li>Grafik materiallarning sifati va aniqligini ta'minlash uchun nazorat olib bordim</li>
                <li>$2,000 dan $25,000 gacha bo‘lgan budjetli loyihalarni samarali boshqardim</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>GRAFIК DIZAYNER</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Logotiplar, bukletlar, infografikalar, taqdimotlar va reklama materiallarini ishlab chiqdim</li>
                <li>Bir vaqtning o‘zida 5 tagacha vazifani bosim ostida boshqardim</li>
                <li>Mijozlarga eng maqbul dizayn yechimlarini tavsiya qildim</li>
                <li>Har oy 4 ta va undan ortiq taqdimotlar va takliflarni ishlab chiqdim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
