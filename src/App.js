import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

      </Routes>
    </Router>
  );
}

export default App;
