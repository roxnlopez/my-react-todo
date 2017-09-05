const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test");

let Schema = mongoose.Schema;
let BookSchema = new Schema({
    title: String,
    author: String,
    description: String
});

var Book = mongoose.model('Book', BookSchema);

var book = new Book({title: "Alice's Adenture in Tokyo"});

book.author = "Lewis Carroll San";

book.save(function() {console.log("Yay you saved!");});

Book.find({}, function(err,books) {
	console.log(books);
});

Book.remove({title: "Alice's Adenture in Tokyo"}, function(err, books) {
	if (err) {return console.log(err);}
	console.log("removed book " + book.title);
});