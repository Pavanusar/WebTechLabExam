// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Orders from './components/Orders';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/orders" component={Orders} />
         
        </div>
      </div>
    </Router>
  );
}

export default App;
