var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.path,
  hot: true,
  historyApiFallback: true,
  watch: true,
  //https: true,
  contentBase: path.join(__dirname, 'src/client')
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at https://localhost:3000/');
});