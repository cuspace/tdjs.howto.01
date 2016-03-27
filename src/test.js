(function () {
	"use strict";

	assertEqual(add(3, 4), 6);

	function add(a, b) {
		return a+b;
	}

	function assertEqual(actual, expected) {
		if(expected !== actual) throw new Error("Expected " + expected + ", but got " + actual);
	}
}());
