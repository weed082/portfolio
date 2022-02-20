import React from 'react';
import './header.css';

const clickTest = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  const test = 'yes';
  if (test === 'yes') {
    console.log('yes yes');
  }
};

export default function Header() {
  return <header onClick={clickTest}>header</header>;
}
