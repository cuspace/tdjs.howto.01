(function() {
	'use strict';

	var classList = require("../vendor/classList.js");
	classList.shim();
	
	exports.initialize = function initialize(element, className) {
		element.classList.add(className);
		// var classes = element.getAttribute("class");
		// if (classes === null) classes = className;
		// else classes += " " + className;
 	// 	element.setAttribute("class", classes);
	};

}());
