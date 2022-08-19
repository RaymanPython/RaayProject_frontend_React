import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ backgroundColor: '#4af', padding: '30px 0' }}>
      <Link to="/" className="underline" style={{ margin: '30px' }}>
        Home
      </Link>
      |
      <Link to="/courses" className="underline" style={{ margin: '30px' }}>
        Курсы
      </Link>
      |
      <Link to="/registration" className="underline" style={{ margin: '30px' }}>
        регистрация
      </Link>
      <Link to="/login" className="underline" style={{ margin: '30px' }}>
        войти
      </Link>
    </nav>
  );
}

export default Navigation;