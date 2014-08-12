function documentInformationAgent () {

	function EICheck () {
		try {
			if(typeof window.GLOBALS == "undefined"){
				setTimeout(EICheck, 500);
			}else{
				var locationInfo = location.href.match(/\/(\w+?)$/);
				
				if(locationInfo && locationInfo[1]){

					var auth = window.GLOBALS[9],
						emailId = locationInfo[1];

					window.EIxhr = new XMLHttpRequest();
					EIxhr.onreadystatechange = function () {
						if (EIxhr.readyState == 4) {
							window.postMessage({type: "ei-mail-raw", raw: window.EIxhr.responseText  }, "*");
						}
					};

					EIxhr.open("GET", document.location.origin + document.location.pathname + "?view=om&ui=2&ik=" + auth + "&th=" + emailId, true);
					EIxhr.send();
					
				}
			}
		} catch (e) {}
	}
	
	window.onpopstate = EICheck;

	// A bad way to try to check on initial page load
	document.onload = setTimeout(EICheck, 2000);
}

// Inject Information Agent
var informationAgentScript = document.createElement('script');
informationAgentScript.appendChild(document.createTextNode('('+ documentInformationAgent +')();'));
(document.body || document.head || document.documentElement).appendChild(informationAgentScript);

window.addEventListener("message", function(event) {
	
	// Only accept messages from the window
	if (event.source != window)
		return;

	// Make sure it's the right message
	if (event.data.type && (event.data.type == "ei-mail-raw")) {

		var rawEmail = event.data.raw
		var service = {}

		Object.keys(providers).forEach(function(k){

			if(providers[k].test(rawEmail)){
				service = providers[k]
			}

		})

		if(service.name){
			service.icon = chrome.extension.getURL("providers/" + service.name.toLowerCase().replace(" ","-") + ".png");

			// Remove any current icon
			var currentIcon = document.getElementById("EIicon");
			if(currentIcon){
				currentIcon.parentNode.removeChild(currentIcon);
			}

			// Attempt to find the place to put the icon in the gmail interface
			var has = document.getElementsByClassName("ha");
			for (var i = has.length - 1; i >= 0; i--) {
				if(has[i].getElementsByTagName("span")){

					var serviceLink = document.createElement("a");
					serviceLink.setAttribute("id", "EIicon");
					serviceLink.setAttribute("href", service.url);
					serviceLink.setAttribute("title", service.name);
					serviceLink.setAttribute("style", "border:0");

					var serviceIcon = document.createElement("img");
					serviceIcon.setAttribute("src", service.icon);
					serviceIcon.setAttribute("style", "top:1px");

					serviceLink.appendChild(serviceIcon);
					
					has[i].getElementsByTagName("span")[0].appendChild(serviceLink);
					return;
				}
			}
		}

	}
}, false);
