import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertsApp } from './GifExpertsApp';
import './styles.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GifExpertsApp/>
  </StrictMode>

);
