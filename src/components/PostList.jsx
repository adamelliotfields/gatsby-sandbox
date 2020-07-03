import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PostListItem from './PostListItem';

export default function PostList() {
  const data = useStaticQuery(graphql`
    query PostListQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMdx;

  return (
    <section className="section">
      <div className="container">
        <h3 className="is-size-3">Here are some blog posts!</h3>
        <div className="columns is-multiline mt-4">
          {edges.map(({ node }, i) => (
            <PostListItem key={node.id} post={node} index={i} count={edges.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
