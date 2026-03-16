import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCallback } from 'react';

const NAV_LINKS = [
  { hash: '#about', label: 'О компании' },
  { hash: '#directions', label: 'Направления' },
  { hash: '#cases', label: 'Кейсы' },
  { hash: '#process', label: 'Как мы работаем' },
  { hash: '#founders', label: 'Команда' },
  { hash: '#contact', label: 'Контакты' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback((e, hash) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        const header = document.getElementById('header');
        const offset = header ? header.offsetHeight + 20 : 20;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
  }, [location.pathname, navigate]);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <Link to="/" className="header__logo">
            <span className="header__logo-symbol">M</span>
            <span className="header__logo-text">МОРЗЕ</span>
          </Link>
          <p className="footer__copy">&copy; 2026 Морзе Технологии</p>
        </div>
        <nav className="footer__nav">
          {NAV_LINKS.map(({ hash, label }) => (
            <a
              key={hash}
              href={hash}
              onClick={(e) => handleNavClick(e, hash)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
