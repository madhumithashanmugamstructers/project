// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard'; // Example of a protected component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;
