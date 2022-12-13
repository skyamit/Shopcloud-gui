import './App.scss';
import React from 'react';
import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;