var Stuff = require('./models/m_stuff');


module.exports = function(app) {

	app.get('/', function(req, res) {  //this is what happens when we get passed nothing - we return the main template
		res.render('index.ejs');  
	});

	// GET ALL STUFFS
	app.get('/api/stuff', function(req, res) {

		Stuff.find({}, function(err, stuffs) {
			if (err) res.send(err)
			if (!stuffs) res.send("no stuff");

			res.json({stuffs: stuffs}); 
		});
	});	

	// GET ONE stuff
	app.get('/api/stuff/:stuff_id', function(req, res) {
		
		var options = {
			type 		: req.params.stuff_id
		}

		Stuff.find(options, function(err, stuff) {
			if (err)res.send(err);
			if (!stuffs) res.send("no stuff");

			res.json({stuff: stuff}); 
		});
	});

	// CREATE NEW stuff
	app.post('/api/stuff', function(req, res) {

		var options = req.body;

		Stuff.create(options, function(err, stuff) {
			if (err) res.send(err);
			res.json(stuff);
		});
	});


	// DELETE a stuff 
	app.delete('/api/stuff/:stuff_id', function(req, res) {
		
		var obj = req.body;

 		Stuff.remove({
            _id : req.params.stuff_id
         }, function(err, stuff) {
            if (err) res.send(err);
         });
	});


	//UPDATE stuff
	app.post('/api/stuff/update/:stuff_id', function(req, res){

		var obj = req.body;
		if (req.params.stuff_id) {
		    Stuff.update(
		    	{_id: req.params.stuff_id},
		    	obj,
		    	{upsert: true},
		    	function (err) {
		    		if (err) res.send(err);
		    	}
		    );
		}
	});
};