import './App.css';
import Header from './header/Header';
import React from 'react';
import Box from './include/Box';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header name="Shoploud" option1="Products" option2="Categories" button1="Login" button2="Signup" />
        <Box />
      </div>
    </Router>
  );
}

export default App;