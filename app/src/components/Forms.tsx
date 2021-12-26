/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <section className="forms section">
        <div className="forms__container container">
          <h1 className="forms__title">Это формы для заполнения</h1>
          <div className="forms__grid grid">
            <form className="forms__form" action="#">
              <fieldset>
                <legend>Получатель</legend>
                <label htmlFor="fullname-field">Имя и фамилия</label>
                <br />
                <input
                  className="forms__text"
                  type="text"
                  name="fullname"
                  id="fullname-field"
                  required
                />
                <br />

                <label htmlFor="phone-field">Телефон для связи</label>
                <br />
                <input
                  className="forms__text"
                  type="tel"
                  name="phone"
                  id="phone-field"
                  placeholder="+7 (999) 999-99-99"
                  required
                />
                <br />

                <label htmlFor="email-field">Электропочта</label>
                <br />
                <input
                  className="forms__text"
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="someemail@example.com"
                  required
                />
                <br />

                <label htmlFor="bday-field">Дата рождения</label>
                <br />
                <input
                  className="forms__text"
                  type="date"
                  name="bday"
                  id="bday-field"
                  max="2021-09-13"
                  required
                />
                <br />
                <br />

                <label>
                  <input type="checkbox" name="agreement" />
                  Согласен с обработкой персональных данных{' '}
                </label>
                <br />
                <input
                  className="forms__button button"
                  type="submit"
                  value="Сохранить"
                />
                <input className="forms__button button warning" type="reset" />
              </fieldset>
            </form>
            <form className="forms__form" action="#">
              <fieldset>
                <legend>Доставка и оплата</legend>
                <p>Способ оплаты</p>
                <br />
                <input
                  type="radio"
                  id="cash"
                  name="payment-method"
                  value="Наличными при получении"
                />
                <label htmlFor="cash">Наличными при получении</label>
                <br />
                <input
                  type="radio"
                  id="card"
                  name="payment-method"
                  value="Картой при получении"
                />
                <label htmlFor="card">Картой при получении</label>
                <br />
                <br />
                <label htmlFor="delivery">Способ доставки</label>
                <br />
                <select id="delivery" name="delivery">
                  <option value="Самовывоз">Заберу в пункте выдачи</option>
                  <option value="Курьер">Курьер</option>
                  <option value="Почта">Почта</option>
                </select>
                <br />
                <br />
                <label htmlFor="message">Пожелания:</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  wrap="soft"
                  // @ts-ignore
                  maxLength="200"
                />
                <br />
                <input
                  className="forms__button button"
                  type="submit"
                  value="Сохранить"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Forms;
