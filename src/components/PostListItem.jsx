import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';

function PostListItem({ post, index, count }) {
  return (
    <div className="column is-12" key={post.fields.slug}>
      <div className={classnames('card', { 'mb-3': index !== count - 1 })}>
        <div className="card-header is-shadowless">
          <Link to={post.fields.slug}>
            <h4 className="card-header-title is-family-secondary is-size-4 pb-0">
              {post.frontmatter.title}
            </h4>
          </Link>
          <p className="is-size-6 pl-4">{post.frontmatter.date}</p>
        </div>
        <div className="card-content py-4">
          <p
            className={classnames('has-text-weight-medium', {
              'has-text-truncated': post.frontmatter.description === null,
            })}
            dangerouslySetInnerHTML={{ __html: post.frontmatter.description ?? post.excerpt }}
          />
        </div>
      </div>
    </div>
  );
}

PostListItem.defaultProps = {
  index: 0,
  count: 1,
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number,
  count: PropTypes.number,
};

export default PostListItem;
