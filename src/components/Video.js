import React, { Component, PropTypes } from 'react';
import YoutubeVideo from './YoutubeVideo.js'


class Video extends Component {
  pickVideoContainer() {
    const {src, id} = this.props
//    return ( src === 'youtube' ) ? (
//    	<YoutubeVideo id={id} />
//    ) : null
	return (<YoutubeVideo id={id} />)
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