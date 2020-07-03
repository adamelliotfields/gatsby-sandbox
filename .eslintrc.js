module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended', 'plugin:mdx/recommended'],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
  },
};
