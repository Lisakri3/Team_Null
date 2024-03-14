import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Beasts from "./components/Beastiarium/beasts.jsx";
import Dicegame from "./components/Dicegame.jsx";
import Map from "./components/map.jsx";
import BeastDetail from "./components/Beastiarium/beastsdetails.jsx";


function App() {
  return (
    <div className="website">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dicegame" element={<Dicegame />} />
        <Route path="Map" element={<Map />} />
        <Route path="Beasts" element={<Beasts />} />
        <Route path="Beasts/:id" element={<BeastDetail />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
