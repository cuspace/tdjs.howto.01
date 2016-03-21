(() => {
	"use strict";

	console.log("\n\n빌드 성공");

	desc("디폴트 테스크");
	task("default", () => {
		console.log("기본 태스크");
	});

	desc("첫번재 태스크");
	task("task1", () => {
		console.log("태스크1");
	});
}());
