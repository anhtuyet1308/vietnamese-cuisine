import React, { Component } from 'react';
import Region from './Region.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Home.js';
import logo from './img/logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    let path = window.location.pathname.slice(1);
    if (!path) path = 'home';
    this.state = {page: path};
  }

  updatePage = (link, elem=null) => {
    this.setState({page: link}, () => {
      if (elem) {
        document.getElementById(elem).scrollIntoView();
      }
      else {
        window.scrollTo(0, 0);
      }
    });
  }

  render() {
    const {page} = this.state;
    return (
      <BrowserRouter>
        <>
          <header>
            <Link to="/" onClick={() => this.updatePage('home')}>
              <img src={logo} className="app-logo" alt="logo" />
              <span className="app-name">Vietnamese Cuisine</span>
            </Link>
            <div className="nav-tabs">
              <div className={page === 'home' ? 'selected' : ''} onClick={() => this.updatePage('home')}>
                <Link to="/">Home</Link>
              </div>
              <div className={page === 'north' ? 'selected' : ''} onClick={() => this.updatePage('north')}>
                <Link to="/north">The North</Link>
              </div>
              <div className={page === 'middle' ? 'selected' : ''} onClick={() => this.updatePage('middle')}>
                <Link to="/middle">The Middle</Link>
              </div>
              <div className={page === 'south' ? 'selected' : ''} onClick={() => this.updatePage('south')}>
                <Link to="/south">The South</Link>
              </div>
              <FontAwesomeIcon id="up-icon" icon="arrow-circle-up" onClick={() => window.scrollTo(0, 0)} />
            </div>
          </header>
          <div className="divider"></div>
          <Switch>
            <Route exact path="/" render={() => <Home updatePage={this.updatePage} />} />
            <Route exact path="/north" render={() => <Region page="north" updatePage={this.updatePage} />} />
            <Route exact path="/middle" render={() => <Region page="middle" updatePage={this.updatePage} />} />
            <Route exact path="/south" render={() => <Region page="south" updatePage={this.updatePage} />} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
