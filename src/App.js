import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home/Home';

import './App.css';

const basename = '/portfolio';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
