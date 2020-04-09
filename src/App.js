import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import FirstPage from './first';
import SecondPage from './second';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-163102315-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <a href="/urlOne" >AppOne</a>
          <br />
          <a href="/urlTwo" >AppTwo</a>
          <br />
          <br />

          <Switch>
            <Route exact path="/urlOne"  ><FirstPage /> </Route>
            <Route exact path="/urlTwo"  ><SecondPage /> </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;