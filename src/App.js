import './App.css';
import React, { useEffect } from 'react'; 
import NavbarClock from './components/NavbarClock/Navbar';
import Navbar from './components/Navbar/Navbar'
import WorkTime from './components/Clock/WorkTime';
import BreakTime from "./components/Clock/BreakTime";
import LongBreakTime from "./components/Clock/LongBreakTime";
import Control from './components/Control/Control';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app" >
        <div className="app__header">
        <Navbar/>
        </div>
        <div className="app__content">
          <NavbarClock />
          <Switch>
            <Route exact path="/" component={WorkTime} />
            <Route path="/break" component={BreakTime} />
            <Route path="/long-break" component={LongBreakTime} />
          </Switch>
          <Control />
        </div>
      </div>
    </Router>
  );
}

export default App;
