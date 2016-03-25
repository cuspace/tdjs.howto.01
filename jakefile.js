(() => {
	"use strict";

	desc("Default");
	task("default", ['version'], () => {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node Version");
	task("version", () => {
		console.log("Checking Node Version: .");
		var pkgJson = require("./package.json");
		var expectedVersion = "v" + pkgJson.engines.node;
		var actualVersion = process.version;
		if (actualVersion !== expectedVersion)
			fail("Incorrect node version: expected " + expectedVersion +
						", but was " + actualVersion);
	});
}());
