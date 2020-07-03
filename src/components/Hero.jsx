import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ArrowDown } from 'react-feather';

export default function Hero() {
  const ref = useRef({
    current:
      typeof window !== 'undefined' && 'document' in window
        ? document.createElement('section')
        : null,
  });

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const { height } = ref.current.getBoundingClientRect();

      window.scrollTo({
        left: 0,
        top: height,
        behavior: 'smooth',
      });
    }
  };

  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <section ref={ref} className="hero is-dark is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-1 mb-5">{title}</h1>
          <p className="subtitle is-size-4">{description}</p>
        </div>
      </div>
      <button
        type="button"
        className="button is-text has-text-light animated infinite shakeY mb-4 mx-auto"
        onClick={handleClick}
      >
        <span className="icon">
          <ArrowDown size={27} />
        </span>
      </button>
    </section>
  );
}
