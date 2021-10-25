import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import ProductContextProvider from './context/productContext';

ReactDOM.render(
      <ProductContextProvider>
        <Routes />
      </ProductContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
