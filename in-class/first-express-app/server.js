'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const taquerias = [
	{name: "Tacos Rapidos"},
	{name: "El Taco de Mexico"},
	{name: "Taqueria Cancun"}
];

const cafes = [
	{name: "La Madeleine",
	 rating: 4},
	{name: "Marmonte",
	 rating: 3},
	{name: "Cafe Havana",
	 rating: 3}
];
app.use(express.static('public'));

//middleware
app.use(function(req, res, next) {
	console.log("battleship sunk");
	console.log("%s request to %s", req.method, req.path);
	next();
});

//This is a controller
function homeController(req, res) {
	console.log("battleship retaliate");
	res.sendFile(__dirname + "/views/index.html");
}

//This is a route
app.get('/', homeController);

app.get('/api/taquerias', function(req,res) {
	res.json(taquerias);
});

app.get('/api/cafes', function(req,res) {
	res.json(cafes);
});

//start server
app.listen(port, function() {
	console.log('Server started on', port);
});