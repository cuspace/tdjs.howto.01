(function() {
	"use strict";

	var jshint = require("simplebuild-jshint");

	desc("Default");
	task("default", ["version", "lint"], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node Version");
	task("version", function() {
		console.log("Checking Node Version: .");
		var pkgJson = require("./package.json");
		var semver = require("semver");
		//var expectedVersion = "v" + pkgJson.engines.node;
		var expectedVersion = pkgJson.engines.node;
		var actualVersion = process.version;
		if (semver.neq(expectedVersion, actualVersion))
			fail("Incorrect node version: expected " + expectedVersion +
						", but was " + actualVersion);
	});

	desc("Lint JavaScript code");
	task("lint", {async: true}, function() {
		process.stdout.write("Linting JavaScript: ");
		jshint.checkFiles({
			files: "jakefile.js",
			options: {},
			globals: {}
		}, complete, fail);
		//jake.exec("node node_modules/jshint/bin/jshint jakefile.js", {interactive: true}, complete);
	});
}());
