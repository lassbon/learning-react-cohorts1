import React from 'react';
import { render } from 'react-dom';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Cards from './components/Cards'


render(
  <BrowserRouter>
    <Cards />
  </BrowserRouter>
 ,
 document.getElementById('root'));


