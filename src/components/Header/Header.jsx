import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ButtonsLanguages } from '../ButtonsLanguages/ButtonsLanguages';

import './header.scss';

export const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={`header ${isOpenMenu ? 'header__menuPhone--open' : ''}`}>
      <div className="header__signature"></div>
      <div className="header__nav">
        <div className="header__navPhone" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
          {isOpenMenu && (
            <div className='header__menuPhone'>
              <ul className="header__listMenuPhone">
                <li className="header__item">
                  <Link
                    to="/"
                    className='header__link'
                  >
                    {t('header.home')}
                  </Link>
                </li>
                <li className="header__item">
                  {t('header.stagesOfWork')}
                </li>
                <li className="header__item">
                  {t('header.about')}
                </li>
                <li className="header__item">
                  {t('header.projects')}
                </li>
                <li className="header__item">
                  {t('header.contacts')}
                </li>
                <ButtonsLanguages />
              </ul>
            </div>
          )}
        </div>
        <ul className="header__navDesktop">
          <li className="header__item">
            <Link to="/" className='header__link'>{t('header.home')}</Link>
          </li>
          <li className="header__item">
            {t('header.stagesOfWork')}
          </li>
          <li className="header__item">
            {t('header.about')}
          </li>
          <li className="header__item">
            {t('header.projects')}
          </li>
          <li className="header__item">
            {t('header.contacts')}
          </li>
          <ButtonsLanguages />
        </ul>
      </div>
    </header>
  )
}
