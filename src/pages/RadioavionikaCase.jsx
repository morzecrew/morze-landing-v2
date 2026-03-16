import { Link } from 'react-router-dom';

export default function RadioavionikaCase() {
  return (
    <div className="case-page">
      <header className="header header--case" id="header">
        <div className="header__inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="header__logo">
            <span className="header__logo-symbol">M</span>
            <span className="header__logo-text">МОРЗЕ</span>
          </Link>
          <Link to="/#cases" className="header__back">&larr; Назад к кейсам</Link>
        </div>
      </header>

      <section className="case-hero">
        <div className="case-hero__glow" />
        <div className="container case-hero__inner" style={{ maxWidth: 820 }}>
          <div className="case-hero__meta">
            <span className="badge badge--ai">ИИ</span>
            <span className="badge badge--year">2024</span>
            <span className="badge badge--industry">Радиоэлектроника</span>
          </div>
          <h1>Радиоавионика</h1>
          <p className="case-hero__desc">
            АО&nbsp;&laquo;Радиоавионика&raquo;&nbsp;&mdash; российская компания из&nbsp;Санкт-Петербурга,
            специализирующаяся на&nbsp;разработке и&nbsp;серийном производстве сложных
            радиоэлектронных комплексов.
          </p>
        </div>
      </section>

      <section className="case-section case-section--surface">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Проблема</p>
          <h2>Много ручного труда</h2>
          <p className="case-section__subtitle">
            Компания сталкивалась с&nbsp;большим объёмом ручной работы в&nbsp;ключевых процессах,
            что замедляло операции и&nbsp;приводило к&nbsp;ошибкам.
          </p>
          <ul className="problem-list">
            <li>Заполнение кодов ОКПД2/ОКВЭД вручную</li>
            <li>Поиск аналогов деталей занимал много времени</li>
            <li>Работа с&nbsp;ГОСТ-документацией без&nbsp;системы поиска</li>
            <li>Зависимость от&nbsp;отдельных специалистов</li>
            <li>Частые ошибки из-за человеческого фактора</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Решение</p>
          <h2>Развернули AI-хаб с&nbsp;тремя специализированными агентами</h2>
          <p className="case-section__subtitle">
            Было принято решение о&nbsp;внедрении локальных языковых моделей на&nbsp;мощностях
            предприятия и&nbsp;создании ИИ-агентов для&nbsp;автоматизации наиболее
            трудозатратных процессов.
          </p>
          <div className="solution-grid">
            <div className="solution-card">
              <h3>Агент-классификатор</h3>
              <p>Автозаполнение кодов ОКПД2/ОКВЭД с&nbsp;точностью более 94%.</p>
            </div>
            <div className="solution-card">
              <h3>Агент-поисковик аналогов</h3>
              <p>Векторный подбор замен по&nbsp;параметрам деталей&nbsp;&mdash; мгновенный поиск вместо часов работы.</p>
            </div>
            <div className="solution-card">
              <h3>RAG-помощник</h3>
              <p>Ответы на&nbsp;вопросы по&nbsp;PDF-документации: ГОСТы, технические руководства, внутренние регламенты.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section case-section--surface">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Результат</p>
          <h2>Кардинальное повышение эффективности</h2>
          <p className="case-section__subtitle">
            Внедрение ИИ-решений кардинально изменило эффективность работы отдела.
          </p>
          <div className="case-result-grid">
            <div className="case-result-card">
              <span className="case-result-card__icon">&#127919;</span>
              <h3>Классификация</h3>
              <p className="case-result-card__value">&gt;94%</p>
              <p>Точность автоклассификации. Экономия часов работы отдела.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#128269;</span>
              <h3>Поиск аналогов</h3>
              <p className="case-result-card__value">Мгновенно</p>
              <p>Подбор аналогов деталей вместо часов ручного поиска.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#129302;</span>
              <h3>Экспертиза</h3>
              <p className="case-result-card__value">24/7</p>
              <p>Доступ к&nbsp;экспертизе через RAG-помощника в&nbsp;любое время.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#9889;</span>
              <h3>Общий результат</h3>
              <p className="case-result-card__value">В разы быстрее</p>
              <p>Существенное сокращение времени от&nbsp;запроса до&nbsp;результата.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-cta">
        <div className="container">
          <h2>Хотите такие&nbsp;же результаты?</h2>
          <p>
            Узнайте, как &laquo;Морзе Технологии&raquo; может помочь вашему предприятию
            достичь аналогичных показателей эффективности.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="btn btn--primary">Получить консультацию</Link>
            <Link to="/#cases" className="btn btn--outline">Другие кейсы</Link>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ textAlign: 'center' }}>
        <p className="footer__copy">&copy; 2026 Морзе Технологии</p>
      </footer>
    </div>
  );
}
