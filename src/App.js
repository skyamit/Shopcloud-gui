import './App.css';
import React from 'react';
import Box from './include/Box';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Box />
      </div>
    </Router>
  );
}

export default App;