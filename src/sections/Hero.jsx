import { MorseStrip } from "../components/Morse.jsx";



export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />
      <div className="hero__morse-container" aria-hidden>
          <MorseStrip
              randomFlash={true}
              randomFlashIntervalMs={2400}
              randomFlashDurationMs={600}
          />
      </div>
      <div className="container hero__inner">

        <div className="hero__text">
          <p className="label">Морзе Технологии</p>
          <h1 className="hero__title">
            Управляйте производством <span className="accent">проще</span>
          </h1>
          <p className="hero__subtitle">
            Внедряем искусственный интеллект и&nbsp;системы управления
            для&nbsp;промышленных компаний. Автоматизируем рутину, сокращаем потери,
            наводим порядок в&nbsp;процессах.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary" onClick={(e) => onNavigate(e, '#contact')}>
              Обсудить задачу
            </a>
            <a href="#about" className="btn btn--outline" onClick={(e) => onNavigate(e, '#about')}>
              Узнать больше&ensp;&darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
