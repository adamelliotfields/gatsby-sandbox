const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createPagesQuery = `
query CreatePagesQuery($limit: Int!) {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;

// For each Markdown node, generate a slug from the file path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    // The value is the slug.
    const value = createFilePath({ node, getNode });

    // Add the slug to the Mdx node so we can query it.
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const component = path.resolve('./src/templates/PostTemplate.jsx');
  const result = await graphql(createPagesQuery, { limit: 1000 });

  if (result.errors) throw result.errors;

  const { edges } = result.data.allMdx;

  // Create blog posts pages.
  edges.forEach(({ node }, i) => {
    const { slug } = node.fields;
    const previous = i === edges.length - 1 ? null : edges[i + 1].node;
    const next = i === 0 ? null : edges[i - 1].node;

    createPage({
      path: slug,
      component,
      context: {
        slug,
        previous,
        next,
      },
    });
  });
};
