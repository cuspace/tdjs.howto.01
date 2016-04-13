(function () {
	"use strict";

	var assert = require("./assert.js");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {

		var IRRELEVANT = "irrelevant";

		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
		});

		afterEach(function() {
			removeElement(container);
		});

		it("hides all content elements except the default upon initialization", function() {
			var defaultTab = createTab();

			var content1 = createTabContent();
			var defaultContent = createTabContent();
			var content3 = createTabContent();

			tabs.initialize({
				tabs: [ createTab(), defaultTab, createTab() ],
				content: [ content1, defaultContent, content3 ],
				defaultTab: defaultTab,//defaultContent,
				activeTabClass: IRRELEVANT,
				hiddenContentClass: "hideClass"
			});

			// assert that elements are hidden
			assert.equal(getClasses(content1), "hideClass", "content 1 should be hidden");
			assert.equal(getClasses(defaultContent), "", "default content should not be hidden");
			assert.equal(getClasses(content3), "hideClass", "content 3 should be hidden");
		});

		it("styles the default tab with a class", function() {
			var tab1 = createTab();
			var defaultTab = createTab();
			var tab3 = createTab();

			var defaultContent = createTabContent();

			tabs.initialize({
				tabs: [ tab1, defaultTab, tab3 ],
				content: [ createTabContent(), defaultContent, createTabContent() ],
				defaultTab: defaultTab,
				activeTabClass: "activeTab",
				hiddenContentClass: IRRELEVANT
			});

			assert.equal(getClasses(tab1), null, "tab1 should not be styled");
			assert.equal(getClasses(defaultTab), "activeTab", "default element should be styled");
			assert.equal(getClasses(tab3), null, "tab3 should not be styled");
		});

		it("preserves existing classes when adding new classes", function() {
			var defaultTab = createTab();
			defaultTab.setAttribute("class", "existingTabClass");

			var defaultContent = createTabContent();
			var hiddenContent = createTabContent();
			hiddenContent.setAttribute("class", "existingContentClass");

			tabs.initialize({
				tabs: [ defaultTab, createTab() ],
				content: [ defaultContent, hiddenContent],
				defaultTab: defaultTab,
				activeTabClass: "activeTab",
				hiddenContentClass: "hiddenContent"
			});

			assert.equal(getClasses(defaultTab), "existingTabClass activeTab", "tab should preserve existing classes");
			assert.equal(getClasses(hiddenContent), "existingContentClass hiddenContent", "content should preserve existing classes");
		});

		function getClasses(element) {
			return element.getAttribute("class");
		}

		function createTab() {
			var tab = addElement("div");
			tab.innerHTML = "tab";
			return tab;
		}

		function createTabContent() {
			var content = addElement("div");
			content.innerHTML = "content";
			return content;
		}

		function addElement(tagName) {
			var element = document.createElement(tagName);
			container.appendChild(element);
			return element;
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

	});

}());
