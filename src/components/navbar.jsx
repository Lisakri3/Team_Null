import React, { useState, useEffect } from 'react';
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
        <div className="logo">Die Taverne</div>
      <nav>
        <ul>
          <li>
            <a href="#beats">Beats</a>
          </li>
          <li>
            <a href="#detail">Detail</a>
          </li>
          <li>
            <a href="#map">Map</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};