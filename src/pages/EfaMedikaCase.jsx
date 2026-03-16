import { Link } from 'react-router-dom';

export default function EfaMedikaCase() {
  return (
    <div className="case-page case-page--erp">
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
            <span className="badge badge--erp">ERP</span>
            <span className="badge badge--year">2024</span>
            <span className="badge badge--industry">Медицинское оборудование</span>
          </div>
          <h1>ЭФА медика</h1>
          <p className="case-hero__desc">
            ООО&nbsp;&laquo;ЭФА медика&raquo; специализируется в&nbsp;области разработки и&nbsp;производства
            аппаратов для&nbsp;малоинвазивной хирургии: электрохирургические аппараты,
            инсуффляторы, ирригаторы-аспираторы, эндовидеокамеры.
          </p>
        </div>
      </section>

      <section className="case-section case-section--surface">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Проблема</p>
          <h2>Неэффективный учёт операций, частые сбои планирования</h2>
          <p className="case-section__subtitle">
            Компания сталкивалась с&nbsp;серьёзными проблемами в&nbsp;планировании производства
            и&nbsp;контроле операций. Плановики тратили часы на&nbsp;составление производственных
            планов, часто возникали сбои из-за неточной информации о&nbsp;загрузке оборудования
            и&nbsp;наличии материалов.
          </p>
          <ul className="problem-list">
            <li>Планирование производства занимало часы вместо минут</li>
            <li>Частые срочные закупки из-за неточного планирования потребностей</li>
            <li>Высокие складские издержки</li>
            <li>Низкая мотивация сотрудников из-за неудобных интерфейсов</li>
            <li>Медленный расчёт фактической себестоимости</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Решение</p>
          <h2>Внедрение Morze&nbsp;ERP</h2>
          <p className="case-section__subtitle">
            Было принято решение о&nbsp;поэтапном внедрении модулей Morze&nbsp;ERP
            для&nbsp;автоматизации ключевых производственных процессов.
          </p>
          <div className="solution-grid solution-grid--2col">
            <div className="solution-card">
              <h3>Автоматическое планирование</h3>
              <p>Система автоматически распределяет задачи по&nbsp;рабочим местам с&nbsp;учётом загрузки и&nbsp;приоритетов.</p>
            </div>
            <div className="solution-card">
              <h3>Расчёт потребностей (MRP)</h3>
              <p>Точный расчёт потребности в&nbsp;материалах на&nbsp;основе производственных планов.</p>
            </div>
            <div className="solution-card">
              <h3>Мониторинг в&nbsp;реальном времени</h3>
              <p>Отслеживание статуса операций и&nbsp;загрузки оборудования в&nbsp;режиме реального времени.</p>
            </div>
            <div className="solution-card">
              <h3>Интерфейсы для&nbsp;цеха</h3>
              <p>Удобные интерфейсы для&nbsp;работников производства, доступные с&nbsp;мобильных устройств.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section case-section--surface">
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="case-section__label">Результат</p>
          <h2>Значительные улучшения во&nbsp;всех ключевых областях</h2>
          <p className="case-section__subtitle">
            Внедрение Morze&nbsp;ERP принесло значительные улучшения во&nbsp;всех ключевых
            областях производства.
          </p>
          <div className="case-result-grid">
            <div className="case-result-card">
              <span className="case-result-card__icon">&#9889;</span>
              <h3>Планирование</h3>
              <p className="case-result-card__value">до 95%</p>
              <p>Экономия времени плановика. Цикл планирования: вместо часов&nbsp;&mdash; минуты.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#128230;</span>
              <h3>Закупки</h3>
              <p className="case-result-card__value">&minus;20%</p>
              <p>Снижение складских издержек. Сокращение времени закупок на&nbsp;25%.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#128101;</span>
              <h3>Производство</h3>
              <p className="case-result-card__value">+15%</p>
              <p>Рост показателей эффективности сотрудников благодаря удобному интерфейсу.</p>
            </div>
            <div className="case-result-card">
              <span className="case-result-card__icon">&#128176;</span>
              <h3>Финансы</h3>
              <p className="case-result-card__value">Быстрее</p>
              <p>Ускорен расчёт фактической себестоимости. Более точное планирование прибыли.</p>
            </div>
          </div>
          <div className="result-highlight">
            Общее время исполнения заказов — заметно сокращено
          </div>
        </div>
      </section>

      <section className="case-cta case-cta--erp">
        <div className="container">
          <h2>Хотите такие&nbsp;же результаты?</h2>
          <p>
            Узнайте, как Morze&nbsp;ERP может помочь вашему предприятию
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
