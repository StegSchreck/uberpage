import { createRoot, createRoot } from "react-dom/client";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<App />);
    const root = createRoot(div);
    root.unmount();
  });
});
