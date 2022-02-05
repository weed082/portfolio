import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <Link to='/'>
            <svg aria-hidden='true' focusable='false' preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024'>
              <path d='M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z' />
              <rect x='0' y='0' width='1024' height='1024' fill='rgba(0, 0, 0, 0)' />
            </svg>
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <svg aria-hidden='true' focusable='false' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
              <path d='M12.534 21.77l-1.09-2.81l10.52.54l-.451 4.5zM15.06 0L.307 6.969L2.59 17.471H5.6l-.52-7.512l.461-.144l1.81 7.656h3.126l-.116-9.15l.462-.144l1.582 9.294h3.31l.78-11.053l.462-.144l.82 11.197h4.376l1.54-15.37z' />
              <rect x='0' y='0' width='24' height='24' fill='rgba(0, 0, 0, 0)' />
            </svg>
            <span>게임</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
