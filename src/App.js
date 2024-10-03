import { useTranslation } from 'react-i18next';

import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ua')}>Українська</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
}

export default App;
