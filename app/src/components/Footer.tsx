/* eslint-disable @typescript-eslint/ban-ts-comment */

import React from 'react';
import { useTheme } from '../contexts/Theme.context';

const Footer = () => {
  const { themeType, setCurrentTheme } = useTheme();

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
              {/*
                // @ts-ignore */}
              <box-icon
                type="logo"
                color={themeType === 'light' ? '' : 'hsl(88deg 50% 53%)'}
                name="github"
              />
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link">
              {/*
                // @ts-ignore */}
              <box-icon
                name="vk"
                color={themeType === 'light' ? '' : 'hsl(88deg 50% 53%)'}
                type="logo"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link">
              {/*
                // @ts-ignore */}
              <box-icon
                name="twitter"
                color={themeType === 'light' ? '' : 'hsl(88deg 50% 53%)'}
                type="logo"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link">
              {/*
                // @ts-ignore */}
              <box-icon
                name="instagram"
                color={themeType === 'light' ? '' : 'hsl(88deg 50% 53%)'}
                type="logo"
              />
            </a>
          </div>
          <address>
            <a className="footer__email" href="mailto:myemail@example.com">
              myemail@example.com
            </a>
          </address>
        </div>

        <p className="footer__copyright">
          Made by xreyaf <br />
          2021-<span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
