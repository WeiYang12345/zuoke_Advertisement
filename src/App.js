import React from 'react';
import { HashRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './view/home/Home';
import Login from './view/login/Login';
import './App.css';
class App extends React.Component {
  render () {
    return (
      <div>
        <Router >
          <div>
            <Switch>
              <Route exact path="/"  component={Login}/>
              <Route path="/home"  component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
  
}

export default App;
