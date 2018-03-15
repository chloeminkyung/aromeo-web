var state = {"pump": true, "aromaNo": 2}
//var baseURL = "https://cors-anywhere.herokuapp.com/https://aromeo-manager-app.herokuapp.com";
var baseURL = ""

function getState() {
    $.get(baseURL + "/demoAPI/getState", function(data) {
	console.log("Received State");
	console.log(data);
	state.pump = data.pump;
	state.aromaNo = data.aromaNo;
    });
}

function setState(s) {
    console.log("Updating State");
    console.log(s);
    $.post(baseURL + "/demoAPI/setState", s, function(result) {
	console.log(result);
    });
}

function updateState() {
    var s = {}
    s.pump = true;
    s.aromaNo = parseInt($("#aromaSelect").val());
    setState(s);
    updateView();
}

function setView() {
    $("#btnEnable").prop('disabled', state.pump);
    $("#aromaSelect").val(state.aromaNo);
}

function updateView() {
    getState();
    setView();
}

$(function() {
    //updateView();
    //setInterval(updateView, 1000);
});
