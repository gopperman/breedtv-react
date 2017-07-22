import React, { Component, PropTypes } from 'react';
import YoutubeVideo from './YoutubeVideo.js'
import VimeoVideo from './VimeoVideo.js'


class Video extends Component {
  pickVideoContainer() {
    const {src, id} = this.props
    return ( src === 'youtube' ) ? (
    	<YoutubeVideo id={id} />
    ) : <VimeoVideo id={id} />
  }

  render() {
    return (
    	<div>
	      {this.pickVideoContainer()}
	    </div>
    )
  }
}

Video.propTypes = {
	src: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

export default Video;