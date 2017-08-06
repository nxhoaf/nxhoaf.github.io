var formUtils = (function() {
	// --------------------------------- Public Declaration -------------------------------------------
	var submit;
	

	submit = function (params) {
		var action = params.action || '';
		var method = params.method || "post";
		var params = params.params || {};

	// submit = function (path, params, method) {
	    // method = method || "post"; // Set method to post by default if not specified.

	    // The rest of this code assumes you are not using a library.
	    // It can be made less wordy if you use one.
	    var form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", action);

	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);

	            form.appendChild(hiddenField);
	         }
	    }

	    document.body.appendChild(form);
	    form.submit();
	}
	
	var self = {
		submit: submit
	}
	return self;
})();