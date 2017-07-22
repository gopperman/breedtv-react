import React, { Component, PropTypes } from 'react';


class YoutubeVideo extends Component {

  componentDidUpdate() {
  }
  render() {
    const url = `https://www.youtube.com/embed/${this.props.id}`
    return (
      <div id="video">
        <iframe frameBorder="0" className="video" src={url}>
        </iframe>
      </div>
    );
  }
}

YoutubeVideo.propTypes = {
	id: PropTypes.string.isRequired
}

export default YoutubeVideo;