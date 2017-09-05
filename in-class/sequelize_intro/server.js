//require express and other modules
var express = require('express'),
app = express();
var Sequelize = require('sequelize');

var sequelize = new Sequelize ('postgres://roxannnlopez@localhost:5432/test_sequelize');

/***********
*MODELS*
***********/
var User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  saying: {
    type: Sequelize.STRING
  }
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    name: 'Roxann',
    saying: 'Everything is basically 0s and 1s'
  });
});

/***********
*ROUTES*
***********/
app.get('/', function homepage(req,res) {
	User.findOne().then(function (user) {
    console.log(user.name);
    res.send("Hello Sunshine");
	});
});


/***********
*SERVER*
***********/
app.listen(process.env.PORT||3000, function() {
	console.log('Express server is up and running on http://localhost:3000/');
});