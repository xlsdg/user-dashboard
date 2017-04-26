export default {
  entry: 'src/index.js',
  publicPath: '/user-dashboard/',
  disableCSSModules: false,
  autoprefixer: null,
  proxy: null,
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd',
      style: true
    }]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};
