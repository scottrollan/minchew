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
          <Route path="/about" exact component={About}></Route>
          <Route path="/agencies" exact component={Agencies}></Route>
          <Route path="/advertisers" exact component={Advertisers}></Route>
          <Route path="/experience" exact component={Experience}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
