'use strict'

const keysInfo = require('/env.js');
const request = require('request');

function get(){

	var apiUrl ="https://maps.googleapis.com/maps/api/js?key="+ keysInfo +"&callback=initMap";

		request(apiUrl, function(error, response, body) {
			
	});
}

