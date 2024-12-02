import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import BestSellers from './components/Best/BestSellers';
import Contact from './components/Contact/Contact';

import Quick from './components/Quick/Quick';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="best" element={<BestSellers />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="quick" element={<Quick />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
