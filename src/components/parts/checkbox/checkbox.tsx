import React from 'react';
import './checkbox.css';

export default function Checkbox() {
  return (
    <div
      className='checkbox'
      onClick={(e) => {
        const checkbox = e.currentTarget;
        checkbox.classList.contains('active') ? checkbox.classList.remove('active') : checkbox.classList.add('active');
      }}
    >
      <svg width='12px' height='9px' viewBox='0 0 12 9'>
        <polyline points='1 5 4 8 11 1'></polyline>
      </svg>
    </div>
  );
}
