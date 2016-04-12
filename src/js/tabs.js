(function() {
	'use strict';

	var classList = require("../vendor/classList.js");
	classList.shim();

	exports.initialize = function initialize(options) {
		var tabs = options.tabs;
		var content = options.content;
		var defaultElement = options.default;
		var contentHideClass = options.contentHideClass;
		var activeTabClass = options.activeTabClass;

		checkOption(tabs, "options.tabs");
		checkOption(content, "options.content");
		checkOption(defaultElement, "options.defaultElement");
		checkOption(activeTabClass, "options.activeTabClass");
		checkOption(contentHideClass, "options.contentHideClass");

		content.forEach(function(element) {
			element.classList.add(contentHideClass);
		});
		defaultElement.classList.remove(contentHideClass);

		var activeIndex = findIndexOfDefaultElement(content, defaultElement);
		tabs[activeIndex].classList.add(activeTabClass);
	};

	function findIndexOfDefaultElement(contentTabs, defaultContentTab) {
		for(var i = 0; i < contentTabs.length; i++) {
			if(contentTabs[i] === defaultContentTab) return i;
		}
		throw new Error("Could not find default in list");
	}

	function checkOption(option, name) {
		if (option === undefined) throw new Error("Expected" + name);
	}

}());
