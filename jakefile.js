/* globals jake: false, desc: false, task: false, complete: false, fail: false */
(function() {
	"use strict";

	var jshint = require("simplebuild-jshint");

	//**** General-purpose tasks
	desc("Default");
	task("default", ["version", "lint"], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Run a localhost server");
	task("run", {async: true}, function() {
		jake.exec(
			"node node_modules/http-server/bin/http-server src",
			{interactive: true},
			complete
		);
	});

	//**** Supporting tasks
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
			files: ["jakefile.js", "src/**/*.js"],
			options: lintOptions(),
			globals: lintGlobals()
		}, complete, fail);
		//jake.exec("node node_modules/jshint/bin/jshint jakefile.js", {interactive: true}, complete);
	});

	function lintOptions() {
		return {
			bitwise: true,
			eqeqeq: true,
			forin: true,
			freeze: true,
			futurehostile: true,
			latedef: "nofunc",
			noarg: true,
			nocomma: true,
			nonbsp: true,
			nonew: true,
			strict: true,
			undef: true,
			node: true,
			browser: true
		};
	}

	function lintGlobals() {
		return {
			//Mocha
			describe: false,
			it: false,
			before: false,
			after: false,
			beforeEach: false,
			afterEach: false
		};
	}
}());
