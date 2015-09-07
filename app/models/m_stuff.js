var mongoose = require('mongoose');  //for using mongo db

module.exports = mongoose.model('Stuff', {
	title: String
});