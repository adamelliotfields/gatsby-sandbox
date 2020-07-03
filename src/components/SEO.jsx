import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook.
 *
 * @see https://www.gatsbyjs.org/docs/use-static-query
 */
function SEO({ title, description }) {
  const data = useStaticQuery(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const { twitter } = data.site.siteMetadata.social;

  const metaTags = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: twitter },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ];

  return (
    <Helmet
      defer={false}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      htmlAttributes={{ lang: 'en' }}
      bodyAttributes={{ class: 'has-navbar-fixed-top' }}
    >
      {metaTags.map((tag) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <meta key={tag.name || tag.property} {...tag} />
      ))}
      <title>{title}</title>
    </Helmet>
  );
}

SEO.defaultProps = {
  description: '',
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SEO;
