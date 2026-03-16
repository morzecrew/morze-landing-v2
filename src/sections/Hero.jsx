const morseLines = [
  '·· — · — — ·· · — ··· — — · — ·',
  '— ·· — · ·· — — · — · — — ··',
  '· — — · ·· — · — ·· — — · ·· —',
  '— — ·· · — · — — · ·· — · — —',
  '·· — — · — ·· · — · — — ·· — ·',
  '— · — — ·· — · · — — · — ·· ·',
  '· ·· — — · — · — ·· — — · · —',
  '— — · — ·· · — — · · — · — ··',
  '·· — · — — ·· · — ··· — — · — ·',
  '— ·· — · ·· — — · — · — — ··',
  '· — — · ·· — · — ·· — — · ·· —',
  '— — ·· · — · — — · ·· — · — —',
];

function parseMorse(text) {
  return [...text].map((ch, j) =>
    ch === '·' ? <i key={j} className="m-dot" /> :
    ch === '—' ? <i key={j} className="m-dash" /> :
    <i key={j} className="m-sp" />
  );
}

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />
      <div className="hero__glow hero__glow--teal" />

      <div className="container hero__grid">
        <div className="hero__inner">
          <p className="label">Морзе Технологии</p>
          <h1 className="hero__title">
            Управляйте производством <span className="accent accent--gradient">проще</span>
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

        <div className="hero__morse" aria-hidden="true">
          {morseLines.map((line, i) => {
            const full = line + '   ' + line + '   ' + line;
            return (
              <div
                key={i}
                className={`hero__morse-line${i % 4 === 0 ? ' hero__morse-line--teal' : ''}`}
                style={{
                  '--speed': `${18 + i * 2}s`,
                  '--delay': `-${i * 1.8}s`,
                  '--y': `${i * 8.3}%`,
                }}
              >
                {parseMorse(full)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
