import React from 'react';
import logo from '../components/images_components/logo.png'
class Nav extends React.Component {

  render() {
    return (
      <div className='nav'>
        <img className='logo' src={logo} />
      </div>
    );
  }
}

export default Nav;
