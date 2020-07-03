/* eslint-disable react/prop-types, react/jsx-filename-extension */

require('typeface-bree-serif');
require('typeface-raleway');
require('./src/styles/index.scss');

const React = require('react');
const { HelmetProvider } = require('react-helmet-async');
const { MDXProvider } = require('@mdx-js/react');

const Content = require('./src/components/Content').default;
const Pre = require('./src/components/Pre').default;

exports.wrapRootElement = ({ element }) => (
  <HelmetProvider context={{}}>
    <MDXProvider
      components={{
        wrapper: Content,
        pre: Pre,
      }}
    >
      {element}
    </MDXProvider>
  </HelmetProvider>
);
