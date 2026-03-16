import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__text">
            <p className="label">О компании</p>
            <h2>Технологии для&nbsp;производства</h2>
            <p className="subtitle">
              &laquo;Морзе Технологии&raquo; помогает производственным компаниям переходить
              на&nbsp;современные цифровые инструменты&nbsp;&mdash; без&nbsp;тяжеловесных
              систем и&nbsp;бесконечных внедрений.
            </p>
            <p className="about__body">
              Мы находим наиболее простой путь к&nbsp;автоматизации. Анализируем процессы,
              подбираем подходящие решения и&nbsp;внедряем их&nbsp;так, чтобы ваша команда
              могла работать с&nbsp;ними самостоятельно.
            </p>
          </Reveal>
          <Reveal className="about__stats" delay={80}>
            <div className="stat">
              <span className="stat__number">10</span>
              <span className="stat__label">инженеров<br />и специалистов</span>
            </div>
            <div className="stat">
              <span className="stat__number">2</span>
              <span className="stat__label">направления:<br />ИИ и ERP</span>
            </div>
            <div className="stat">
              <span className="stat__number">&rarr;</span>
              <span className="stat__label">научный подход<br />к разработке</span>
            </div>
            <div className="stat">
              <span className="stat__number">&9881;</span>
              <span className="stat__label">фокус на<br />производстве</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
