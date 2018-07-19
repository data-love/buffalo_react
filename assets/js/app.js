import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello.js';

const App = () => {
  const container = document.getElementById('app');
  console.log(container);

  if (!container) return;
  render(<Hello />, container);
};

App();
