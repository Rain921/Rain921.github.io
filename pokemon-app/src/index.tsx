// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/main.module.scss';
import App from './App';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

        <Provider store={store}>
            <App />
        </Provider>

);

