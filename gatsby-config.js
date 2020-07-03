/* eslint-disable global-require */

const dotenv = require('dotenv');

// This allows us to use environment specific variables like in create-react-app.
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: '/gatsby-sandbox',
  siteMetadata: {
    title: 'Gatsby Sandbox',
    author: {
      name: 'Adam Fields',
    },
    description: 'My first Gatsby site using MDX, Bulma, and tons of other goodies  🚀',
    siteUrl: 'https://adamelliotfields.github.io/gatsby-sandbox',
    social: {
      github: 'adamelliotfields',
      // Need a Twitter account to generate the OG tags.
      twitter: 'adam_e_fields',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    // We don't use this directly but it's required by transformer-sharp and remark-images.
    'gatsby-plugin-sharp',
    // This is what allows us to process images from GraphQL using Sharp.
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet-async',
    {
      // Generates a manifest.webmanifest.
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Sandbox',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    {
      // Write JSX in Markdown.
      // Replaces transformer-remark.
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            // Processes images in Markdown with plugin-sharp.
            resolve: 'gatsby-remark-images',
            options: {
              // The container used in posts has a max-width of 960px.
              maxWidth: 960,
              // This wraps images in a figure tag with a figcaption as long as the image has an
              // alt or title attribute.
              showCaptions: true,
            },
          },
          // Convert ASCII punctuation into proper typographic punctuation.
          'gatsby-remark-smartypants',
        ],
        remarkPlugins: [
          // This removes the p tag that wraps images by default.
          require('remark-unwrap-images'),
        ],
      },
    },
  ],
};
