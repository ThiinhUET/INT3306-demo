import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import ProductContextProvider from './context/productContext';
import CartContextProvider from './context/cartContext';

ReactDOM.render(
      <ProductContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
