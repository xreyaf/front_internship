/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer section">
        <div className="footer__container container">
          <div className="footer__content">
            <div className="footer__social">
              <a
                href="https://github.com/xreyaf"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link">
                <box-icon type="logo" name="github" />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link">
                <box-icon name="vk" type="logo" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link">
                <box-icon name="twitter" type="logo" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link">
                <box-icon name="instagram" type="logo" />
              </a>
            </div>
            <address>
              <a className="footer__email" href="mailto:myemail@example.com">
                myemail@example.com
              </a>
            </address>
          </div>

          <p className="footer__copyright">
            Made by xreyaf in <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
