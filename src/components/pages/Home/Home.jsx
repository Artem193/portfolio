import React from "react";
import { useTranslation } from 'react-i18next';

import { Header } from "../../Header/Header";

import './home.scss';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />
      <h1 className="home__title">
        Pinchuk Artem
      </h1>
    </div>
  )
}
