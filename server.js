
// Requires \\
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')

// Create Express App Object \\
var app = express()

// Application Configuration \\
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// Routes \\
app.get('/', function(req, res){
  res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>')
})

app.post('/formsubmit', function(req, res){
  res.redirect('/success')
})

app.get('/success', function(req, res){
  res.send('Success!')
})

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Server running on port ' + port)

})