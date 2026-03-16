import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function CasesSection() {
  return (
    <section className="section section--surface" id="cases">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Кейсы</p>
          <h2>Результаты наших клиентов</h2>
          <p className="subtitle">
            Реальные проекты на&nbsp;промышленных предприятиях.
          </p>
        </Reveal>

        <div className="cases__grid">
          {/* Радиоавионика */}
          <Reveal tag="article" className="case-card">
            <div className="case-card__header">
              <div className="case-card__meta">
                <span className="case-card__badge case-card__badge--ai">ИИ</span>
                <span className="case-card__year">2024</span>
              </div>
              <p className="case-card__industry">Радиоэлектроника</p>
              <h3 className="case-card__title">Радиоавионика</h3>
            </div>
            <div className="case-card__body">
              <p className="case-card__text">
                Развернули локальные языковые модели на&nbsp;мощностях предприятия
                и&nbsp;создали хаб с&nbsp;тремя специализированными агентами:
                автоклассификация кодов ОКПД2, мгновенный подбор аналогов деталей
                и&nbsp;помощник по&nbsp;технической документации.
              </p>
              <div className="case-card__results">
                <div className="case-card__metric">
                  <span className="case-card__metric-value">&gt;94%</span>
                  <span className="case-card__metric-label">точность автоклассификации</span>
                </div>
                <div className="case-card__metric">
                  <span className="case-card__metric-value">24/7</span>
                  <span className="case-card__metric-label">доступ к&nbsp;экспертизе через ИИ-помощника</span>
                </div>
              </div>
            </div>
            <Link to="/cases/radioavionika" className="btn btn--outline case-card__link">
              Читать кейс&ensp;&rarr;
            </Link>
          </Reveal>

          {/* ЭФА медика — ERP */}
          <Reveal tag="article" className="case-card" delay={80}>
            <div className="case-card__header">
              <div className="case-card__meta">
                <span className="case-card__badge case-card__badge--erp">ERP</span>
                <span className="case-card__year">2024</span>
              </div>
              <p className="case-card__industry">Медицинское оборудование</p>
              <h3 className="case-card__title">ЭФА медика — ERP</h3>
            </div>
            <div className="case-card__body">
              <p className="case-card__text">
                Внедрили Morze&nbsp;ERP для&nbsp;автоматизации производства медицинской техники:
                планирование, расчёт потребностей в&nbsp;материалах, мониторинг операций
                в&nbsp;реальном времени и&nbsp;удобные интерфейсы для&nbsp;цеха.
              </p>
              <div className="case-card__results">
                <div className="case-card__metric">
                  <span className="case-card__metric-value">95%</span>
                  <span className="case-card__metric-label">экономия времени планирования</span>
                </div>
                <div className="case-card__metric">
                  <span className="case-card__metric-value">&minus;20%</span>
                  <span className="case-card__metric-label">складские издержки</span>
                </div>
              </div>
            </div>
            <Link to="/cases/efa-medika" className="btn btn--outline case-card__link">
              Читать кейс&ensp;&rarr;
            </Link>
          </Reveal>

          {/* ЭФА медика — CRM */}
          <Reveal tag="article" className="case-card" delay={160}>
            <div className="case-card__header">
              <div className="case-card__meta">
                <span className="case-card__badge case-card__badge--crm">CRM</span>
                <span className="case-card__year">2024–2025</span>
              </div>
              <p className="case-card__industry">Медицинское оборудование</p>
              <h3 className="case-card__title">ЭФА медика — CRM</h3>
            </div>
            <div className="case-card__body">
              <p className="case-card__text">
                Разработали CRM-систему для&nbsp;управления клиентской базой
                и&nbsp;взаимодействием с&nbsp;заказчиками медицинского оборудования.
                Интеграция с&nbsp;Morze&nbsp;ERP для&nbsp;сквозного управления
                от&nbsp;заявки до&nbsp;отгрузки.
              </p>
              <div className="case-card__results">
                <div className="case-card__metric case-card__metric--soon">
                  <span className="case-card__metric-label">Подробности скоро</span>
                </div>
              </div>
            </div>
            <span className="btn btn--outline case-card__link" style={{ opacity: 0.5, cursor: 'default' }}>
              Подробнее&ensp;&rarr;
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
