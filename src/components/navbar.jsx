import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import '../App.css';
import './navbar.css';

export const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <Link to="/" className="logo"> - Die Taverne - </Link>
      <nav>
        <ul>
          <li>
        <Link to="Beasts"> Bestiarium </Link>
          </li>
          <li>
            <Link to="Dicegame"> Würfelspiel </Link>
          </li>
          <li>
            <Link to="Map"> Karte </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};