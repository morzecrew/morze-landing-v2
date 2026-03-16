import Reveal from '../components/Reveal';

const ITEMS = [
  { title: 'Научный подход', text: 'Научный подход к\u00A0коммерческой разработке\u00A0— каждое решение обосновано.' },
  { title: 'Понимание производства', text: 'Глубокое понимание производственных процессов и\u00A0реальных задач предприятий.' },
  { title: 'Практический опыт', text: 'Работаем с\u00A0промышленными предприятиями и\u00A0знаем их\u00A0специфику изнутри.' },
  { title: 'Сильная команда', text: '10\u00A0инженеров и\u00A0специалистов, сфокусированных на\u00A0одной задаче.' },
  { title: 'Понятные сроки', text: 'Быстрые и\u00A0понятные внедрения с\u00A0чёткими этапами и\u00A0результатами.' },
  { title: 'Компетенция, а\u00A0не\u00A0зависимость', text: 'Создаём компетенцию внутри вашей компании, а\u00A0не\u00A0привязку к\u00A0подрядчику.' },
];

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="why__grid">
          <Reveal className="why__text">
            <p className="label">Преимущества</p>
            <h2>Почему выбирают &laquo;Морзе&nbsp;Технологии&raquo;</h2>
          </Reveal>
          <Reveal className="why__list" delay={80}>
            {ITEMS.map(({ title, text }) => (
              <div className="why-item" key={title}>
                <span className="why-item__marker" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
