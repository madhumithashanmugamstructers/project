// import './App.css';
import SignIn from './views/auth/signin1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignUp from './views/auth/signup'; 


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} /> {/* Default route */}
      </Routes>
    </div>
  </Router>  
  );
}

export default App;
