var state = { "pump": false, "aromaNo": 4};

var init = function(app) {
    app.get('/demoAPI/getState', function(req, res, next) {
	res.send(state);
    });

    app.post('/demoAPI/setState', function(req, res, next) {
	s = req.body;

	// Check if pump variable is a boolean
	if (typeof(s.pump) === typeof(true)) {
	    state.pump = s.pump;
	}
	else {
	    console.error("[demoAPI] Error: Invalid pump state");
	    res.send("Error: Invalid pump state");
	    done();
	}
	
	// Check if aromaNo variable is an int
	if (typeof(s.aromaNo) === typeof(0)) {
	    state.aromaNo = s.aromaNo;
	}
	else {
	    console.error("[demoAPI] Error: Invalid aroma number");
	    res.send("Error: Invalid aroma number");
	}

	console.log("[demoAPI] Updating state to " + JSON.stringify(state));
	res.send("State Updated");
	done();
    });	   
}
