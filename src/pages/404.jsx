import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

function NotFoundPage({ data, location }) {
  const { description } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title="Not Found" description={description} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NotFoundPage;
