import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import './styles/global.scss';

ReactDOM.render(
  <div>
    <Banner name="Max" />
  </div>,
  document.getElementById('app'),
);
