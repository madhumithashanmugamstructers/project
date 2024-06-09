// import './App.css';
import SignIn from './views/auth/signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignUp from './views/auth/signup'; 
import { JWTProvider } from './context/jwtcontext';
// import renderRoutes, { routes } from './routes';


function App() {
  return (
    
    <Router>
      <JWTProvider>
          <div className="App">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              {/* <JWTProvider>{renderRoutes(routes)}</JWTProvider> */}
              <Route path="/" element={<SignIn />} /> {/* Default route */}
            </Routes>
          </div>
    </JWTProvider>
  </Router>  
  
  );
}

export default App;
