import React, { useState , useEffect} from 'react';
import './Portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
  });
}, []);

  const [filter, setFilter] = useState('all');
  const portfolioItems = [
    {
      id: 1,
      title: 'Figma Maktabi',
      url: "https://schooll-weld.vercel.app/",
      category: 'app',
      image: '../src/assets/figma.png'
    },
    {
      id: 2,
      title: 'Hisoblagich Ilova',
      url: "https://caunter-delta.vercel.app/",
      category: 'product',
      image: '../src/assets/counter.png'
    },
    {
      id: 3,
      title: 'Tikuvchi do‘koni Namangan',
      url: "https://tailor-eta.vercel.app/",
      category: 'branding',
      image: '../src/assets/tailor.png'
    },
    {
      id: 4,
      title: 'Kitoblar',
      url:"http://localhost/kitoblar/",
      category: 'books',
      image: '../src/assets/kitoblar.png'
    },
    {
      id: 5,
      title: 'Aviachipta sayt dizayni',
      url: "http://localhost/aviachipta/",
      category: 'app',
      image: '../src/assets/aviachipta.png'
    },
    {
      id: 6,
      title: 'Vazifalar ro‘yxati',
      url: "http://localhost/todo_app/",
      category: 'product',
      image: '../src/assets/todo_app.png'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" >
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Yaratgan loyihalarimni quyida ko‘rishingiz mumkin. Har bir loyiha mening dizayn, funksionallik 
            va foydalanuvchi tajribasiga bo‘lgan e’tiborimni namoyon etadi.
          </p>
        </div>

        <div className="portfolio-filter" data-aos="fade-down">
          <ul>
            <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>HAMMASI</li>
            <li className={filter === 'app' ? 'active' : ''} onClick={() => setFilter('app')}>ILOVALAR</li>
            <li className={filter === 'product' ? 'active' : ''} onClick={() => setFilter('product')}>MAHSULOTLAR</li>
            <li className={filter === 'branding' ? 'active' : ''} onClick={() => setFilter('branding')}>BRENDING</li>
            <li className={filter === 'books' ? 'active' : ''} onClick={() => setFilter('books')}>KITOBLAR</li>
          </ul>
        </div>

        <div className="portfolio-grid" data-aos="fade-up">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">Loyihani ko‘rish</a>}
                <p>{item.category.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
