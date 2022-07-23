import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {userContext} from './Helper/context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <userContext.Provider>
    <App />
  </userContext.Provider>
);