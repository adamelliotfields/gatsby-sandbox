import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/Post';

export const pageQuery = graphql`
  query PostTemplateQuery($slug: String!) {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`;

function PostTemplate({ data, pageContext, location }) {
  const post = data.mdx;
  const { title, description } = post.frontmatter;
  const { avatar } = data;
  const { author } = data.site.siteMetadata;
  const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO title={title} description={description ?? ''} />
      <Post avatar={avatar} author={author} post={post} previous={previous} next={next} />
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          base64: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
        }),
      }),
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }),
    mdx: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default PostTemplate;
