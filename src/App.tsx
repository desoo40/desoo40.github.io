import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import RacesPage from './Pages/RacesPage';
import SamplePage from './Pages/SamplePage'
import NotFoundPage from './Pages/NotFoundPage'
import dsLogo from './assets/dsLogo.png'

function App() {
  return(
    <Router>
      <header className="sticky">
          <span className="logo">
            <img src={dsLogo} alt="logo" width="100" height="100" />
          </span>
          <NavLink to="/"  className="menuItem">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/races" className="menuItem">
            Runs
          </NavLink>
        </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<SamplePage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
   )
}

export default App
