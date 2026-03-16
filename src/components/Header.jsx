import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const NAV_LINKS = [
  { hash: '#about', label: 'О компании' },
  { hash: '#directions', label: 'Направления' },
  { hash: '#cases', label: 'Кейсы' },
  { hash: '#process', label: 'Как мы работаем' },
  { hash: '#founders', label: 'Команда' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const scrollToHash = useCallback((hash) => {
    const el = document.querySelector(hash);
    if (el) {
      const header = document.getElementById('header');
      const offset = header ? header.offsetHeight + 20 : 20;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleNavClick = useCallback((e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = '';

    if (location.pathname === '/') {
      scrollToHash(hash);
    } else {
      navigate('/' + hash);
    }
  }, [location.pathname, navigate, scrollToHash]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const headerClass = [
    'header',
    scrolled && 'header--scrolled',
    menuOpen && 'header--menu-open',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} id="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-symbol">M</span>
          <span className="header__logo-text">МОРЗЕ</span>
        </Link>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {NAV_LINKS.map(({ hash, label }) => (
            <a
              key={hash}
              href={hash}
              className="header__link"
              onClick={(e) => handleNavClick(e, hash)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn btn--sm header__cta"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Обсудить задачу
        </a>

        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
