var mongoose = require('mongoose');  //for using mongo db

module.exports = mongoose.model('Example', {
	content: String
});