import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/bookinh">Book a Table</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path = "/booking" component = { BookingPage }/>
      </Switch>
    </Router>
  );
}

export default App;
