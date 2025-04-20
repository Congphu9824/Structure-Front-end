import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux'; // ✅ 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Storage is where the entire state of the application is stored. */}
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
