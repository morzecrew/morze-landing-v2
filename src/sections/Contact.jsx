import { useState, useCallback } from 'react';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const contact = form.elements.contact.value.trim();
    const newErrors = {};

    if (!name) newErrors.name = 'Укажите ваше имя';
    if (!contact) newErrors.contact = 'Укажите телефон или электронную почту';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }, []);

  return (
    <section className="section section--cta" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal className="contact__text">
            <p className="label">Контакты</p>
            <h2>Давайте обсудим вашу задачу</h2>
            <p className="subtitle">
              Оставьте заявку&nbsp;&mdash; мы&nbsp;свяжемся в&nbsp;течение одного рабочего дня
              и&nbsp;предложим следующий шаг.
            </p>
            <div className="contact__benefits">
              <p>&rarr; Бесплатная первичная консультация</p>
              <p>&rarr; Аудит процессов и&nbsp;подбор решения</p>
              <p>&rarr; Демонстрация на&nbsp;ваших задачах</p>
            </div>
          </Reveal>

          <Reveal tag="form" className="contact-form" delay={80}>
            <form className="contact-form__inner" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__group">
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Как к вам обращаться"
                  className={errors.name ? 'input--error' : ''}
                  disabled={submitted}
                />
                {errors.name && <p className="contact-form__error">{errors.name}</p>}
              </div>

              <div className="contact-form__group">
                <label htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Название компании"
                  disabled={submitted}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-info">Телефон или электронная почта *</label>
                <input
                  type="text"
                  id="contact-info"
                  name="contact"
                  placeholder="+7 (___) ___-__-__ или email"
                  className={errors.contact ? 'input--error' : ''}
                  disabled={submitted}
                />
                {errors.contact && <p className="contact-form__error">{errors.contact}</p>}
              </div>

              <div className="contact-form__group">
                <label htmlFor="interest">Что интересует</label>
                <select id="interest" name="interest" disabled={submitted}>
                  <option value="">Выберите направление</option>
                  <option value="ai">Искусственный интеллект</option>
                  <option value="erp">Morze ERP</option>
                  <option value="both">Оба направления</option>
                  <option value="unsure">Пока не определился</option>
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Комментарий</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Кратко опишите задачу или вопрос"
                  disabled={submitted}
                />
              </div>

              {!submitted && (
                <button type="submit" className="btn btn--primary btn--full">
                  Отправить заявку
                </button>
              )}

              <p className="contact-form__note">
                Нажимая кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных.
              </p>

              {submitted && (
                <div className="contact-form__success">
                  <p className="contact-form__success-title">Заявка отправлена</p>
                  <p>Мы свяжемся с вами в течение одного рабочего дня.</p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
