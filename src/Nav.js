import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Nav.css';

const Nav = () => (
  <Router>
    <div>
      <div className="centeredmenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/TabA">TabA</Link></li>
          <li><Link to="/TabB">TabB</Link></li>
          <li><Link to="/TabC">TabC</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={Home}/>
        <Route path="/TabA" component={TabA}/>
        <Route path="/TabB" component={TabB}/>
        <Route path="/TabC" component={TabC}/>
    </div>

  </Router>
)

const Home = () => (
  <div className="wrapper">
    <div className="sidebar">
      <ul>
        <li>we can write some shit here and it will wrap, sorta lol</li>
      </ul>
    </div>
    <div className="mapwrapper">
      <iframe className='mapcontent' src="https://ovaclocked.carto.com/builder/27222ec0-9519-4102-af98-b4810af3631a/embed"></iframe>
    </div>
  </div>
)

const TabA = () => (
  <div className="wrapper">
    <div className="sidebar">
      <ul>
        <li>we can write some shit here and it will wrap, sorta lol</li>
      </ul>
    </div>
    <div className="mapwrapper">
      <iframe className='mapcontent' src="https://ovaclocked.carto.com/builder/8bf1cac3-ccf7-4361-8f6c-61301d133ae1/embed"></iframe>
    </div>
  </div>
)

const TabB = () => (
  <div className="wrapper">
    <div className="sidebar">
      <ul>
        <li>we can write some shit here and it will wrap, sorta lol</li>
      </ul>
    </div>
    <div className="mapwrapper">
      <iframe className='mapcontent' src="https://ovaclocked.carto.com/builder/27222ec0-9519-4102-af98-b4810af3631a/embed"></iframe>
    </div>
  </div>
)

const TabC = () => (
  <div className="wrapper">
    <div className="sidebar">
      <ul>
        <li>we can write some shit here and it will wrap, sorta lol</li>
      </ul>
    </div>
    <div className="mapwrapper">
      <iframe className='mapcontent' src="https://ovaclocked.carto.com/builder/27222ec0-9519-4102-af98-b4810af3631a/embed"></iframe>
    </div>
  </div>
)

export default Nav
