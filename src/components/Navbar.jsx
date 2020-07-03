import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { graphql, Link, useStaticQuery, withPrefix } from 'gatsby';
import { GitHub, Twitter } from 'react-feather';

function Navbar({ location }) {
  const [isActive, setIsActive] = useState(false);

  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  const { github, twitter } = data.site.siteMetadata.social;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span role="img" className="is-size-4" aria-label="house emoji">
              🏠
            </span>
            {location.pathname !== withPrefix('/') && (
              <span className="is-family-primary is-size-5 has-text-weight-semibold ml-2">
                {title}
              </span>
            )}
          </Link>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <button
            type="button"
            className={classnames('button', 'is-text', 'has-text-light', 'navbar-burger', {
              'is-active': isActive,
            })}
            aria-label="menu"
            aria-expanded={isActive}
            onClick={handleClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className={classnames('navbar-menu', { 'is-active': isActive })}>
          <div className="navbar-end">
            <a
              className="navbar-item pb-1"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <GitHub size={27} />
              </span>
              <span className="is-hidden-desktop has-text-weight-semibold ml-2">GitHub</span>
            </a>
            <a
              className="navbar-item pb-1"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <Twitter size={27} />
              </span>
              <span className="is-hidden-desktop has-text-weight-semibold ml-2">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Navbar;
