import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../Icon';
import {CartContext} from '../../context/cartContext';
import './header.scss';

const Header = () => {
  const {itemCount} = useContext(CartContext);

  return (
    <header className="header">
      <Link to='/'>Store</Link>
      <Link to='cart'>
        <CartIcon /> Cart ( {itemCount} )
      </Link>
    </header>
  )
}

export default  Header