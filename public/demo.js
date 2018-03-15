var state = {"pump": true, "aromaNo": 2}
var newPump = false;
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
    s.pump = newPump;
    s.aromaNo = parseInt($("#aromaSelect").val());
    setState(s);
    updateView();
}

function setView() {
    $("#btnEnable").removeClass();
    $("#aromaSelect").prop("disabled", state.pump);

    if (!state.pump) {
	$("#btnEnable").addClass("btn btn-success");
	$("#btnEnable").val("Enable Aromeo");
	newPump = true;
    }
    else {
	$("#aromaSelect").val(state.aromaNo);
	$("#btnEnable").addClass("btn btn-danger");
	$("#btnEnable").val("Disable Aromeo");
	newPump = false;
    }
}

function updateView() {
    getState();
    setView();
}

$(function() {
    updateView();
    setInterval(updateView, 1000);
});
