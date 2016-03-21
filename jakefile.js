(() => {
	"use strict";

	console.log("\n\nBUILD OK");

	desc("Default Task");
	task("default", () => {
		console.log("Default Task");
	});

	desc("First Task");
	task("task1", () => {
		console.log("task1");
	});
}());
