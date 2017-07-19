import React, { Component } from 'react';
import Social from './components/Social.js'
import logo from './img/favicon-84x84.png'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="BreedTV">
        <h1>BreedTV <blink><a title="SKIP">&gt;&gt;</a></blink></h1>
        <a className="sidebar__open">[info]</a>
        <header>
          <a className="sidebar__close">[x]</a>
          <div className="video__info">
            <p><img src={logo} alt="BreedTV" /></p>
            <h2 className="video__title"><a href="" className="video__permalink">Loading...</a></h2>
            <p id="share"><a href="" className="permalink">link</a> &middot;
            <a target="_blank" rel="noopener noreferrer" className="video__fbshare" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbreedtv.com.com">share</a> &middot;
            <a target="_blank" rel="noopener noreferrer" className="video__tweet" href="https://twitter.com/intent/tweet?url=http%3a%2f%2fbreedtv.com&via=breedtv">tweet</a></p>
          </div>
          <div className="video__tags"></div>
          <Social />
          <div className="colophon">
            <p><a target="_blank" rel="noopener noreferrer" href="//gopperman.com">@gopperman</a> &middot; <a href="//twitter.com/dangersez">@Danger</a></p>
            <p><a href="//twitter.com/drewSaysGoVeg">@Drew</a> &middot; <a target="_blank" rel="noopener noreferrer" href="//thosebreeders.com">Breeders</a></p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
