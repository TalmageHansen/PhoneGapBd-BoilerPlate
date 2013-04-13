function Startup() { }

Startup.prototype = {

	/**
	 * starting place for the app
	 */
	run : function() {
		var self = this;
		
		self.regEventHandlers();
		self.init();
		self.start();
	},

	/**
	 * Comment out lines registering for events, which you wish not to listen to 
	 */
	regEventHandlers : function() {		
		//This is an event that fires when a Cordova application is put into the background.
		document.addEventListener("pause", function(){ App.common.showAlert("App pushed to background", App.about.name); }, false);
		
		//This is an event that fires when a Cordova application is retrieved from the background.
		document.addEventListener("resume", function(){ App.common.showAlert("App is back from background", App.about.name); }, false);
		
		//This is an event that fires when a Cordova application is online (connected to the Internet).
		document.addEventListener("online", function(){ App.common.showAlert("Data connection is up - now online", App.about.name); window.App.network.online = true; }, false);
		
		//This is an event that fires when a Cordova application is offline (not connected to the Internet).
		document.addEventListener("offline", function(){ App.common.showAlert("Data connection lost - now offline", App.about.name); window.App.network.online = true; }, false);
		
		//This is an event that fires when the user presses the back button.
		//document.addEventListener("backbutton", function(){ App.common.showAlert("User navigating back", App.about.name); }, false);
		
		//This is an event that fires when a Cordova application detects the battery has reached the critical level threshold.
		//window.addEventListener("batterycritical", function(){ App.common.showAlert("Device battery is critical", App.about.name); }, false);
		
		//This is an event that fires when a Cordova application detects the battery has reached the low level threshold.
		//window.addEventListener("batterylow", function(){ App.common.showAlert("Device battery is low", App.about.name); }, false);
		
		//This is an event that fires when a Cordova application detects a change in the battery status.
		//window.addEventListener("batterystatus", function(){ App.common.showAlert("Device battery status changed", App.about.name); }, false);
		
		//This is an event that fires when the user presses the menu button.
		//document.addEventListener("menubutton", function(){ App.common.showAlert("User looking for menu options", App.about.name); }, false);
		
		//This is an event that fires when the user presses the search button on Android.
		//document.addEventListener("searchbutton", function(){ App.common.showAlert("User is searching something", App.about.name); }, false);
		
		//This is an event that fires when the user presses the start call button.
		//document.addEventListener("startcallbutton", function(){ App.common.showAlert("Call started", App.about.name); }, false);
		
		//This is an event that fires when the user presses the end call button.
		//document.addEventListener("endcallbutton", function(){ App.common.showAlert("Call ended", App.about.name); }, false);
		
		//This is an event that fires when the user presses the volume down button.
		//document.addEventListener("volumedownbutton", function(){ App.common.showAlert("Volum goes down", App.about.name); }, false);
		
		//This is an event that fires when the user presses the volume up button.
		//document.addEventListener("volumeupbutton", function(){ App.common.showAlert("Volume went up", App.about.name); }, false);
	},

	init : function() {
		window.localStorage.setItem("lastused", new Date().now());
	},
	
	start : function() {
		App.common.showAlert("Starting the app now", App.about.name);
		window.location.replace("html/home.html");
	},
};