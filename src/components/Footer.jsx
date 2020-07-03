import React from 'react';

export default function Footer() {
  return (
    <footer className="footer is-fixed-bottom py-3">
      <div className="has-text-centered">
        <p>
          {'Made with '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
          {' and '}
          <a href="https://gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </p>
        <p>{`© ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
}
