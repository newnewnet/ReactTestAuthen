var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var server = require('pushstate-server');

var express = require('express');
var app = express();
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


// app.use(express.static('src'));
// app.use(function(req, res) {
//   res.sendFile(__dirname + '/src/index.html')
// })




app.get('/api/info', function(req, res){
  res.status(200).send({
    data:{
      name: 'Nuttapol Teangiam'
    }
  })
});

app.post('/api/login', function(req, res){
  res.status(200).send({
    data:{
      token: 'xxxxxxxx'
    }
  })
});

app.get('*', function(req, res){
  res.sendfile('./src/index.html');
});


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
