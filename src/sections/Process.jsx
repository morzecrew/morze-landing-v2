import Reveal from '../components/Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Аудит и\u00A0анализ',
    duration: '2–4 недели',
    items: [
      'Встречи с\u00A0вашей командой и\u00A0интервью',
      'Анализ процессов и\u00A0выявление узких мест',
      'Изучение ИТ-инфраструктуры',
      'Выезд на\u00A0производство',
    ],
  },
  {
    num: '02',
    title: 'Демонстрация решения',
    duration: '≈ 2 недели',
    items: [
      'Готовим демонстрационный образец',
      'Показываем подход на\u00A0ваших данных и\u00A0задачах',
      'Согласуем план внедрения',
    ],
  },
  {
    num: '03',
    title: 'Внедрение и\u00A0запуск',
    duration: 'от 1 до 3 мес.',
    items: [
      'Настройка и\u00A0адаптация под\u00A0ваши процессы',
      'Обучение сотрудников',
      'Сопровождение на\u00A0старте',
    ],
  },
];

export default function Process() {
  return (
    <section className="section section--surface" id="process">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Процесс</p>
          <h2>Как мы работаем</h2>
          <p className="subtitle">
            Понятный путь от&nbsp;первой встречи до&nbsp;работающего решения.
          </p>
        </Reveal>

        <div className="process__timeline">
          {STEPS.map(({ num, title, duration, items }, i) => (
            <Reveal key={num} className="process-step" delay={i * 80}>
              <div className="process-step__marker">
                <span className="process-step__num">{num}</span>
              </div>
              <div className="process-step__content">
                <div className="process-step__header">
                  <h3>{title}</h3>
                  <span className="process-step__duration">{duration}</span>
                </div>
                <ul className="process-step__list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
