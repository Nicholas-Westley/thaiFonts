stuff.factory("serviceStuff", function() {
    return {
        getRandomTitle: function() {
            
        	var random = [
        		"Click",
        		"Something",
        		"Other",
        		"What",
                "Tick boom",
                "Huzzah",
                "Heinlein",
                "Asimov",
                "Elderberry"
        	];
        	return random[Math.floor(Math.random()*random.length)];
        }
    };
});