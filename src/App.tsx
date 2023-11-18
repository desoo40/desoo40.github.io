import './App.css'
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import RacesPage from './Pages/RacesPage';
import SamplePage from './Pages/SamplePage'
import NotFoundPage from './Pages/NotFoundPage'
import dsLogo from './assets/dsLogo.png'
import YandexPracticumPage from "./Pages/YandexPraticumPage/YandexPracticumPage";
import LegionPage from "./Pages/Legion/LegionPage";

function App() {
  return(
    <Router>
      <header className="sticky">
          <span className="logo">
            <img src={dsLogo} alt="logo" width="100" height="100" />
          </span>
          <NavLink to="/"  className="menuItem">
            Home
          </NavLink>
          <NavLink to="/races" className="menuItem">
            Races
          </NavLink>
           <NavLink to="/practicum" className="menuItem">
            Yandex
          </NavLink>
          <NavLink to="/legion" className="menuItem">
            Legion
          </NavLink>
        </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<SamplePage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/practicum" element={<YandexPracticumPage />} />
          <Route path="/legion" element={<LegionPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
   )
}

export default App
