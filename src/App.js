import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topnav">
          <img className="app-logo" src="https://i.ytimg.com/vi/UsXxbBdq8AU/maxresdefault.jpg"  href="#" />
          <div className="topnav-right">
            <a href="#expert">Expert</a>
            <a href="#works">Works</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <header className="App-header">
          <div className="container">
            <div className="left-half">
              <img className="header-picture" src="https://68.media.tumblr.com/ef045aad95b34f1ddda0cb06e169e931/tumblr_olsmxntQ311vgoaqio3_250.png" alt="Kim Jisoo" />
            </div>
            <div className="right-half">
              <p className="rotate-text">Singer and Dancer</p>
              <article>
                <h1>Kim Jisoo</h1>
                <h3>Blackpink</h3>
                <div class="simple-subscription-form">
                  <form>
                    <h4>Subscribe</h4>
                    <div class="input-group">
                      <input class="input-group-field" type="email" placeholder="Email" required></input>
                      <button class="button">Sign up now</button>
                    </div>
                  </form>
                  </div>
              </article>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;