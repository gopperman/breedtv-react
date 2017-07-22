import React, { Component, PropTypes } from 'react';


class VimeoVideo extends Component {

  render() {
    const url = `http://player.vimeo.com/video/${this.props.id}?api=1&autoplay=1`
    return (
      <div id="video">
        <iframe className="vimeo" 
          id="player" 
          src={url} width="100%" 
          frameborder="0" 
          webkitAllowFullScreen mozallowfullscreen allowFullScreen>
        </iframe>
      </div>
    );
  }
}

VimeoVideo.propTypes = {
	id: PropTypes.string.isRequired
}

export default VimeoVideo;