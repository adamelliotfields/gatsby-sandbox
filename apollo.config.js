// We aren't using Apollo client, but we are using Apollo's VS Code extension.
module.exports = {
  client: {
    includes: ['./src/**/*.jsx'],
    tagName: 'graphql',
    service: {
      name: 'gatsby',
      url: 'http://127.0.0.1:8000/___graphql',
      skipSSLValidation: true,
    },
  },
};
