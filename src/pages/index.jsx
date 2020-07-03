import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

function IndexPage({ data, location }) {
  const { description } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title="Home" description={description} />
      <Hero />
      <PostList />
    </Layout>
  );
}

IndexPage.propTypes = {
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

export default IndexPage;
