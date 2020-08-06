import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Agencies from './pages/Agencies';
import Advertisers from './pages/Advertisers';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/About" exact component={About}></Route>
          <Route path="/Agencies" exact component={Agencies}></Route>
          <Route path="/Advertisers" exact component={Advertisers}></Route>
          <Route path="/Experience" exact component={Experience}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
