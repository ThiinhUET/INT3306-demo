import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../Icon';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to='/'>Store</Link>
      <Link to='cart'>
        <CartIcon /> Cart
      </Link>
    </header>
  )
}

export default  Header