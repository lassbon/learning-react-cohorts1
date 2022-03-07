import React from 'react';
import { render } from 'react-dom';
import './index.css'
import 'react-notifications-component/dist/theme.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Cards from './components/Cards'
import Register from './components/Register'
import { ReactNotifications } from 'react-notifications-component'


render(
  <BrowserRouter>
    <ReactNotifications />
    <Register />
  </BrowserRouter>
 ,
 document.getElementById('root'));


