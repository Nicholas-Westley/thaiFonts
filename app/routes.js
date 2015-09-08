var Example = require('./models/m_example');

module.exports = function(app) {

	app.get('/', function(req, res) {  //this is what happens when we get passed nothing - we return the main template
		res.render('index.ejs');  
	});

	// GET ALL EXAMPLES
	app.get('/api/examples', function(req, res) {

		Example.find({}, function(err, examples) {
			
			if (err) res.send(err)
			if (!examples) res.send("no examples");

			res.json(examples); 
		});
	});	

	// CREATE NEW example
	app.post('/api/example', function(req, res) {
		var options = req.body;

		Example.create(options, function(err, example) {
			if (err) res.send(err);
			res.json(example);
		});
	});
};