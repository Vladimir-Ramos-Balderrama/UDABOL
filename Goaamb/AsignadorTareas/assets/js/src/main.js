/**
 * Autor: Goaamb
 */

function loadTasks() {
}

function loadLogin() {
	$.ajax({
		url : "views/login.gtp",
		method : "get",
		success : function(data) {
			$("#mainSection").html(data);
			loadLoginJS();
		}
	});
}

function loadLoginJS() {
	G.util.includeJS("assets/js/src/login.js", function() {
		console.log("login loaded.");
	});
}

function isLoggedIn() {
	var s = G.cookie.get("session");
	if (s) {
		// TODO decript session variable
	}
	return false;
}

$(window).on("load", function() {
	if (isLoggedIn()) {
		loadTasks();
	} else {
		loadLogin();
	}
});
