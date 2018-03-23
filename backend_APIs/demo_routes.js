var state = { "pump": false, "aromaNo": 4};

var init = function(app) {
    app.get('/demoAPI/getState', function(req, res, next) {
	return res.json(state);
    });

    app.post('/demoAPI/setState', function(req, res, next) {
	s = req.body;
	console.log("[demoAPI]: Updating state to " + JSON.stringify(s));
	
	// Check if pump variable is a boolean
	if (s.pump == 'true' || s.pump == 'false') {
	    state.pump = (s.pump == 'true' ? true : false);
	}
	else {
	    console.error("[demoAPI] Error: Invalid pump state");
	    return res.sendStatus(400);
	}
	
	// Check if aromaNo variable is an int
	if (parseInt(s.aromaNo) !== NaN) {
	    state.aromaNo = parseInt(s.aromaNo);
	}
	else {
	    console.error("[demoAPI] Error: Invalid aroma number");
	    return res.sendStatus(400);
	}

	console.log("[demoAPI] Updated state");
	return res.sendStatus(200);
    });	   
}

module.exports.init = init;
