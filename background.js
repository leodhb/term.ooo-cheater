chrome.runtime.onInstalled.addListener(function () {

	chrome.contextMenus.create({
		id: "guessContextItem",
		title: "Qual a palavra de hoje?",
		type: "normal",
		contexts: ["page"],
		"documentUrlPatterns": ["https://term.ooo/"]
	});
});


chrome.contextMenus.onClicked.addListener(function (item, tab) {
	"use strict";
	if (item.menuItemId == "guessContextItem") {
		chrome.tabs.executeScript(tab.id, { code: "guessBtn = true;", allFrames: true }, function () { chrome.tabs.executeScript(tab.id, { file: "guess.js", allFrames: true }); });
	}
});
