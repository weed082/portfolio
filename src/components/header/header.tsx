import React from 'react';
import './header.css';

function clickTest(e: React.MouseEventHandler<HTMLElement>) {
  console.log(e);
}

export default function Header() {
  return <header onClick={clickTest}>header</header>;
}
