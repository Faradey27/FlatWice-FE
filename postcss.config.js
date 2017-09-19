module.exports = {
  plugins: {
    'postcss-import': {
      path: ['./src/assets'],
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions'],
    },
  },
};
