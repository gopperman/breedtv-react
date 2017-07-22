import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import Sidebar from './components/Sidebar.js'
// Temporary
import videos from './data/videos.json'
import './App.css';

class App extends Component {
  constructor() {
      super()

      const requestUrl = 'http://breedtv.com/wp-json/btv/v1/random/20'

      fetch(requestUrl).then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          response: data,
          videos: videos,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      console.log(videos)
  }

  openSidebar(event) {
    // TODO: cache me
    const sidebar = document.querySelector('.BreedTV')
    sidebar.classList.remove('sidebar__hidden')
    sidebar.classList.add('sidebar__visible')
  }
  render() {
    return (
      <div className="BreedTV sidebar__visible">
        <h1>BreedTV <blink><a title="SKIP">&gt;&gt;</a></blink></h1>
        <a onClick={this.openSidebar} className="sidebar__open">[info]</a>
        <Sidebar />
        <main></main>
      </div>
    );
  }
}

export default App;
