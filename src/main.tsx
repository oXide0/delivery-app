import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppWrapper from './layout/AppWrapper';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppWrapper>
                <App />
            </AppWrapper>
        </Provider>
    </React.StrictMode>
);
