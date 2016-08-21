module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  sourceType: 'module',
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/no-inline-styles': 1,
  },
};
