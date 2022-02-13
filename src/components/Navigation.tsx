import React from 'react';
import '../styles/Navigation.scss';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">Cards</Link>
      <Link to="/buttons">Buttons</Link>
    </div>
  );
};

export default Navigation;
