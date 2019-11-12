import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
const NavBar = ({icon, title}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />{title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );  
}

NavBar.defaultProps = { 
  title: 'Content Keeper',
  icon: 'fas fa-id-card-alt'
}

NavBar.propTypes = { 
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default NavBar;
