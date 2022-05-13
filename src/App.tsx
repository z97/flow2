import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Button } from 'react-bootstrap';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
        <div className="container-fluid mt-3" id='HeaderID'>
          <div className="row">
            <div className="col-sm-3 p-3 bg-primary text-white">LOGO</div>
            <div className="col-sm-9 p-3 bg-dark text-white">
              <div className="row">
                <div className="col-sm-7 p-3 bg-primary text-white">Search</div>
                <div className="col-sm-5 p-3 bg-dark text-white">
                  <div className="row">
                    <div className="col-sm-6 p-3 bg-dark text-white">Sign In</div>
                    <div className="col-sm-6 p-3 bg-dark text-white">
                      <div className="row">
                        <div className="col-lg-3 p-3 bg-dark text-white">icon1</div>
                        <div className="col-lg-3 p-3 bg-dark text-white">icon2</div>
                        <div className="col-lg-3 p-3 bg-dark text-white">icon3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>

                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3" id='BodyID'>
          <div className='row'>
            <div className='col'>
              <div className="card">
                <img className="card-img" src="logo512.png" alt="Card image" width="100" height="300" />
                <div className="card-img-overlay">
                  <p className="card-text">I'm text that has a background image!</p>
                </div>
              </div>
              <div className='col'>
            </div>
            <div className="card">
              <img className="card-img" src="logo512.png" alt="Card image" width="100" height="300" />
              <div className="card-img-overlay">
                <p className="card-text">I'm text that has a background image!</p>
              </div>
            </div>
          </div>
        </div>

    </div>

      </header >


    </div >
  );
}

export default App;
