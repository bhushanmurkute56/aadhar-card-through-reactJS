import { createRoot } from 'react-dom/client'
import './index.css'
const root = createRoot(document.getElementById('root'));
import Home from './View/Home'
import { BrowserRouter, Route, Routes } from 'react-router';
import Aadhar from './Component/Aadhar';

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aadhar" element={<Aadhar />} />
  </Routes>
  </BrowserRouter>
);