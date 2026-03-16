import Reveal from '../components/Reveal';

const FOUNDERS = [
  {
    name: 'Михаил Ковалевский',
    role: 'Генеральный директор',
    photo: '/img/kovalevskiy.png',
    bio: 'Более 6\u00A0лет в\u00A0разработке встраиваемых систем. Профильное образование в\u00A0области электроники. Глубокая экспертиза в\u00A0процессорных устройствах и\u00A0микроконтроллерах. Опыт создания оборудования для\u00A0МКС, медицинской техники и\u00A0образовательной робототехники.',
  },
  {
    name: 'Александр Стороженко',
    role: 'Технический директор',
    photo: '/img/storozhenko.jpg',
    bio: 'Более 6\u00A0лет в\u00A0коммерческой разработке. Образование в\u00A0области программного обеспечения. Создатель платформы Morze\u00A0Assistant. Широкий опыт проектирования и\u00A0запуска корпоративных систем на\u00A0облачных платформах.',
  },
  {
    name: 'Лев Литвинов',
    role: 'Технический руководитель',
    photo: '/img/litvinov.jpg',
    bio: 'Более 6\u00A0лет в\u00A0разработке программных продуктов. Специализация на\u00A0искусственном интеллекте и\u00A0обработке больших данных. Главный разработчик продукта dakko.ai. Магистр математики и\u00A0физики, аспирант физического факультета СПбГУ.',
  },
];

export default function Founders() {
  return (
    <section className="section section--surface" id="founders">
      <div className="container">
        <Reveal className="section__header">
          <p className="label">Команда</p>
          <h2>Основатели компании</h2>
          <p className="subtitle">
            Люди, которые строят &laquo;Морзе Технологии&raquo;.
          </p>
        </Reveal>
        <div className="founders__grid">
          {FOUNDERS.map(({ name, role, photo, bio }, i) => (
            <Reveal key={name} className="founder-card" delay={i * 80}>
              <img className="founder-card__photo" src={photo} alt={name} loading="lazy" />
              <h3 className="founder-card__name">{name}</h3>
              <p className="founder-card__role">{role}</p>
              <p className="founder-card__bio">{bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
