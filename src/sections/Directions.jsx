import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Directions() {
  return (
    <section className="section directions" id="directions">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Направления</p>
          <h2>Выберите нужное направление</h2>
          <p className="subtitle">
            У&nbsp;нас два ключевых направления&nbsp;&mdash; каждое решает свою задачу.
            Перейдите на&nbsp;страницу нужного продукта, чтобы узнать подробности.
          </p>
        </Reveal>

        <div className="directions__grid">
          <Reveal tag="article" className="dir-card dir-card--ai">
            <div className="dir-card__badge">ИИ</div>
            <h3 className="dir-card__title">Искусственный интеллект</h3>
            <p className="dir-card__subtitle">
              Внедряем и&nbsp;обучаем&nbsp;&mdash; чтобы ваша компания могла развиваться самостоятельно
            </p>
            <p className="dir-card__text">
              Анализируем процессы предприятия, находим точки наибольшей пользы от&nbsp;ИИ
              и&nbsp;создаём решения, которые ваши сотрудники смогут развивать
              без&nbsp;привлечения программистов.
            </p>
            <ul className="dir-card__list">
              <li>Аудит процессов и&nbsp;поиск точек применения</li>
              <li>Создание помощников и&nbsp;сценариев автоматизации</li>
              <li>Обучение команды работе с&nbsp;искусственным интеллектом</li>
              <li>Формирование внутренней компетенции</li>
            </ul>
            <Link to="/cases/radioavionika" className="dir-card__case">
              <span className="dir-card__case-label">Кейс</span>
              <span className="dir-card__case-title">Радиоавионика</span>
              <span className="dir-card__case-desc">
                Локальные языковые модели на&nbsp;мощностях предприятия. Точность автоклассификации &gt;94%
              </span>
              <span className="dir-card__case-link">Читать кейс&ensp;&rarr;</span>
            </Link>
            <div className="dir-card__footer">
              <span className="dir-card__timeline">Срок внедрения: от&nbsp;1&nbsp;месяца</span>
              <a href="#" className="btn btn--primary btn--full">
                Подробнее о&nbsp;внедрении ИИ&ensp;&rarr;
              </a>
            </div>
          </Reveal>

          <Reveal tag="article" className="dir-card dir-card--erp" delay={80}>
            <div className="dir-card__badge">ERP</div>
            <h3 className="dir-card__title">Morze ERP</h3>
            <p className="dir-card__subtitle">
              Лёгкая и&nbsp;быстрая система управления производством
            </p>
            <p className="dir-card__text">
              Morze ERP построена вокруг задач производства, а&nbsp;не&nbsp;бухгалтерского учёта.
              Планирование, контроль выполнения, склад, закупки&nbsp;&mdash; всё в&nbsp;одном месте.
              Проще и&nbsp;гибче тяжеловесных классических систем.
            </p>
            <ul className="dir-card__list">
              <li>Управление производственными заказами</li>
              <li>Планирование и&nbsp;контроль выполнения</li>
              <li>Склад, закупки, производственные данные</li>
              <li>Быстрое внедрение без&nbsp;лишней сложности</li>
            </ul>
            <Link to="/cases/efa-medika" className="dir-card__case">
              <span className="dir-card__case-label">Кейс</span>
              <span className="dir-card__case-title">ЭФА медика</span>
              <span className="dir-card__case-desc">
                Автоматизация производства медтехники. Экономия времени планирования до&nbsp;95%
              </span>
              <span className="dir-card__case-link">Читать кейс&ensp;&rarr;</span>
            </Link>
            <div className="dir-card__footer">
              <span className="dir-card__timeline">Срок внедрения: от&nbsp;3&nbsp;месяцев</span>
              <a href="#" className="btn btn--primary btn--full">
                Подробнее о&nbsp;Morze ERP&ensp;&rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
