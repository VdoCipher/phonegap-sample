window.console = {
	log : function(str){
		document.querySelector("#logT").innerHTML += str+"\n";
	},
};
window.console.error = window.console.log;
window.console.warn= window.console.log;
window.onerror = function(msg, url, line, col, error) {
	var extra = !col ? '' : '\ncolumn: ' + col;
	   extra += !error ? '' : '\nerror: ' + error;
	    window.console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
};
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id + window.vdocipher + " !");
        console.log('Received Event: ' + id + window.vdocipher.dummyTest() + " !");
		console.error('Errorrrr');
    },
	startPlaying : function(){
		console.log("Button clicked...");
		//window.vdocipher.play();
		// cordova.exec() ...
	}
};
