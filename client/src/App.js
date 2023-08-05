import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ScheduleQuote from './components/ScheduleQuote';
import ManageAccount from './components/ManageAccount';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/schedule-quote" component={ScheduleQuote} />
        <Route path="/manage-account" component={ManageAccount} />
      </Switch>
    </Router>
  );
}

export default App;
