import Reveal from '../components/Reveal';

const ITEMS = [
  { title: 'Прозрачные процессы', text: 'Видно, что происходит на\u00A0каждом этапе производства.' },
  { title: 'Меньше ручной работы', text: 'Рутинные операции автоматизированы.' },
  { title: 'Быстрые решения', text: 'Данные собраны в\u00A0одном месте, решения принимаются быстрее.' },
  { title: 'Внутренняя компетенция', text: 'Команда умеет работать с\u00A0новыми инструментами.' },
  { title: 'Порядок в\u00A0данных', text: 'От\u00A0производства до\u00A0закупок\u00A0— единая система.' },
  { title: 'Экономия ресурсов', text: 'Конкретная и\u00A0измеримая экономия времени и\u00A0денег.' },
];

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Результаты</p>
          <h2>Что получает бизнес</h2>
          <p className="subtitle">
            Конкретные изменения, а&nbsp;не&nbsp;абстрактные обещания.
          </p>
        </Reveal>
        <div className="results__grid">
          {ITEMS.map(({ title, text }, i) => (
            <Reveal key={title} className="result-card" delay={(i % 6) * 80}>
              <span className="result-card__icon">&#10003;</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
