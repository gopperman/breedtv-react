import React, { Component } from 'react';
import Social from './Social.js'
import Colophon from './Colophon.js'
import logo from '../img/favicon-84x84.png'

class Sidebar extends Component {

  closeSidebar(event) {
    // TODO: cache me
    const sidebar = document.querySelector('.BreedTV')
    sidebar.classList.remove('sidebar__visible')
    sidebar.classList.add('sidebar__hidden')
  }

  render() {

    return (
       <sidebar>
          <a onClick={this.closeSidebar} className="sidebar__close">[x]</a>
          <div className="video__info">
            <p><img src={logo} alt="BreedTV" /></p>
            <h2 className="video__title"><a href="" className="video__permalink">Loading...</a></h2>
            <p id="share"><a href="" className="permalink">link</a> &middot;
            <a target="_blank" rel="noopener noreferrer" className="video__fbshare" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbreedtv.com.com">share</a> &middot;
            <a target="_blank" rel="noopener noreferrer" className="video__tweet" href="https://twitter.com/intent/tweet?url=http%3a%2f%2fbreedtv.com&via=breedtv">tweet</a></p>
          </div>
          <div className="video__tags"></div>

          <Social />
          <Colophon />
        </sidebar>
    );
  }
}

export default Sidebar;