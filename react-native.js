module.exports = {
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/no-inline-styles': 1,
  },
};
