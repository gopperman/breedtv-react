import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class Tag extends Component {

  render() {
    const { name, slug } = this.props
    const url=`/tag/${slug}`
    return (
      <a className="tag" href={url}>{name}</a>
    )
  }
}
Tag.propTypes = {
	name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default Tag;