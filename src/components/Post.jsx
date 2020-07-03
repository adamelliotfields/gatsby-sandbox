import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

function Post({ avatar, author, post, previous, next }) {
  return (
    <section className="section section-post">
      <div className="container">
        <div className="card">
          <div className="card-header is-shadowless pb-4">
            <h1 className="card-header-title is-size-1 pl-5 py-0">{post.frontmatter.title}</h1>
            {post.frontmatter.description && (
              <p className="subtitle is-size-4 pl-5 mb-0">{post.frontmatter.description}</p>
            )}
            <div className="media pl-5 mt-4">
              <Image
                Tag="figure"
                className="media-left image is-48x48"
                fixed={avatar.childImageSharp.fixed}
                alt={author.name}
              />
              <div className="media-content">
                <p className="has-text-weight-bold">{author.name}</p>
                <p>{post.frontmatter.date}</p>
              </div>
            </div>
          </div>
          <div className="card-content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          {(previous || next) && (
            <div className="card-footer is-block px-5 py-4">
              <div className="level is-mobile">
                <div className="level-left">
                  {previous && (
                    <div className="level-item">
                      <Link to={previous.fields.slug} rel="prev">
                        {`← ${previous.frontmatter.title}`}
                      </Link>
                    </div>
                  )}
                </div>

                <div className="level-right">
                  {next && (
                    <div className="level-item">
                      <Link to={next.fields.slug} rel="next">
                        {`${next.frontmatter.title} →`}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Post.defaultProps = {
  previous: null,
  next: null,
};

Post.propTypes = {
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
  author: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  post: PropTypes.shape({
    body: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
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
};

export default Post;
