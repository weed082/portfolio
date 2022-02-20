import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <header>
      <Link to='/'>
        <span>홈</span>
      </Link>
      <Link to='/test'>
        <span>게임</span>
      </Link>
    </header>
  );
}
