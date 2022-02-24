import React from 'react';
import './toggle.css';

export default function Toggle() {
  return (
    <div
      className='toggle'
      onClick={(e) => {
        const toggle = e.currentTarget;
        toggle.classList.contains('active')
          ? toggle.classList.remove('active')
          : toggle.classList.add('active');
      }}
    >
      <span></span>
    </div>
  );
}
