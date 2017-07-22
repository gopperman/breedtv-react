import React, { Component } from 'react';
import _ from 'lodash'
import Colophon from './Colophon.js'
import Social from './Social.js'
import Tag from './Tag.js'
import logo from '../img/favicon-84x84.png'

class Sidebar extends Component {

  closeSidebar(event) {
    // TODO: cache me
    const sidebar = document.querySelector('.BreedTV')
    sidebar.classList.remove('sidebar__visible')
    sidebar.classList.add('sidebar__hidden')
  }

  getVideoTitle(video) {
    return _.get(video, 'title', 'Loading...')
  }

  getTags(tags) {
    return tags.map( (d) => {
      return (<Tag key={_.uniqueId('tag')} slug={d.slug} name={d.name} />)
    })
  }

  render() {
    const {video} = this.props,
      tags = _.get(video, 'tags', []),
      url = `http://breedtv.com/${_.get(video, 'slug', '')}`,
      fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&via=breedtv`
    return (
       <sidebar>
          <a onClick={this.closeSidebar} className="sidebar__close">[x]</a>
          <div className="video__info">
            <p><img src={logo} alt="BreedTV" /></p>
            <h2 className="video__title">
              <a href="" className="video__permalink">{this.getVideoTitle(video)}</a>
            </h2>
            <p id="share">
              <a href={url} className="permalink">link</a> &middot;
              <a target="_blank" rel="noopener noreferrer" className="video__fbshare" href={fb}>share</a> &middot;
              <a target="_blank" rel="noopener noreferrer" className="video__tweet" href={twitter}>tweet</a>
            </p>
          </div>
          <div className="video__tags">{this.getTags(tags)}</div>

          <Social />
          <Colophon />
        </sidebar>
    );
  }
}

export default Sidebar;