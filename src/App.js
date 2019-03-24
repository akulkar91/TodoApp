import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './containers/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './containers/Gallery';
import About from './containers/About';
import Nav from './components/Nav';

class App extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <div>
        <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='*' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
