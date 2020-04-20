import React from 'react';

import Routes from './routes';

import Header from './components/Header';

import './styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};
