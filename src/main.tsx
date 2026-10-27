import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');
if (root?.getAttribute('data-page') === 'home') {
  window.history.scrollRestoration = 'manual';
  const showHomeFromTop = () => {
    if (!window.location.hash) window.scrollTo(0, 0);
  };
  window.addEventListener('pageshow', showHomeFromTop);
  showHomeFromTop();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
