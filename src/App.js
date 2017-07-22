import React, { Component } from 'react';
import _ from 'lodash'
import Sidebar from './components/Sidebar.js'
import Video from './components/Video.js'
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
          queue: videos,
          currentVideo: {},
          status: 'loading',
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // If our state changes, re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    return ( !_.isEqual(this.state, nextState) && nextState.status === 'loading')
  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({
      status: 'rendering'
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.setState({
      status: 'playing'
    })
  }

  openSidebar(event) {
    // TODO: cache me
    const sidebar = document.querySelector('.BreedTV')
    sidebar.classList.remove('sidebar__hidden')
    sidebar.classList.add('sidebar__visible')
  }

  videoOrNull(video) {
    return video ? (
      <Video src={video.src} id={video.id} />
    ) : null
  }

  render() {
    const queue = _.get(this,'state.queue', [])

    const nextVideo = queue[0] || null

    return (
      <div className="BreedTV sidebar__visible">
        <h1>BreedTV <blink><a title="SKIP">&gt;&gt;</a></blink></h1>
        <a onClick={this.openSidebar} className="sidebar__open">[info]</a>
        <Sidebar video={nextVideo}/>
        <main>
          {this.videoOrNull(nextVideo)}
        </main>
      </div>
    );
  }
}

export default App;
