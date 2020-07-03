import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ location, children }) {
  return (
    <>
      <Navbar location={location} />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
