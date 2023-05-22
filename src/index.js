import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from '../src/redux/Store'
import { createDispatchHook, createSelectorHook, Provider } from 'react-redux';


const context = React.createContext( store );
export const useUserDispatch = createDispatchHook( context );
export const useUserSelector = createSelectorHook( context );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store} context={context}>
      <App />
    </Provider>,
  
);


