import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserStore } from './state/UserStore';
import { ItemStore } from './state/ItemsStore';
import { BasketStore } from './state/BasketStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore(),
    basketItem: new BasketStore(),
    }} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
