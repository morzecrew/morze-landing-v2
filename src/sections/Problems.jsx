import Reveal from '../components/Reveal';

const ITEMS = [
  { num: '01', title: 'Много ручной работы', text: 'Сотрудники тратят время на\u00A0рутинные операции, которые давно пора автоматизировать.' },
  { num: '02', title: 'Разрозненные данные', text: 'Информация разбросана по\u00A0таблицам, мессенджерам и\u00A0головам сотрудников.' },
  { num: '03', title: 'Нет прозрачности', text: 'Непонятно, на\u00A0каком этапе заказ, где узкое место и\u00A0кто за\u00A0что отвечает.' },
  { num: '04', title: 'Тяжёлые системы', text: 'Классические решения слишком сложные, дорогие и\u00A0долгие во\u00A0внедрении.' },
  { num: '05', title: 'Потери времени и\u00A0денег', text: 'Время уходит на\u00A0согласования, поиск информации и\u00A0исправление ошибок.' },
  { num: '06', title: 'Нет компетенций по\u00A0ИИ', text: 'Искусственный интеллект кажется далёким, непонятным и\u00A0недоступным.' },
];

export default function Problems() {
  return (
    <section className="section section--surface" id="problems">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Знакомо?</p>
          <h2>С&nbsp;чем сталкивается производство</h2>
          <p className="subtitle">
            Если хотя&nbsp;бы два пункта&nbsp;&mdash; про&nbsp;вас, нам есть о&nbsp;чём поговорить.
          </p>
        </Reveal>
        <div className="problems__grid">
          {ITEMS.map(({ num, title, text }, i) => (
            <Reveal key={num} className="problem-card" delay={(i % 6) * 80}>
              <span className="problem-card__num">{num}</span>
              <h3 className="problem-card__title">{title}</h3>
              <p className="problem-card__text">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
