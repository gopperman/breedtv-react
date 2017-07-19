import React, { Component } from 'react';
import logoSmall from '../img/favicon-32x32.png'

class Social extends Component {
  render() {
    const socialStyle = {
      'border': 'none',
      'overflow': 'hidden',
      'height': '35px',
    }
    return (
		<div id="social">
			<p><img src={logoSmall} alt="BreedTV" /></p>
			<iframe className="social__like" title="like us on Facebook" src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fbreedtv&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=35" scrolling="no" frameborder="0" style={socialStyle} allowTransparency="true"></iframe>
			<iframe className="social__follow" title="follow us on Twitter" allowtransparency="true" frameborder="0" scrolling="no"  src="//platform.twitter.com/widgets/follow_button.html?screen_name=breedtv&show_count=false&show_screen_name=false" style={socialStyle}></iframe>
		</div>
    );
  }
}

export default Social;