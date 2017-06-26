document.addEventListener('DOMContentLoaded', function() {
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(null, {file: "jquery-3.1.1.js"}, function() {
            chrome.tabs.executeScript(null, {file: "tenkGrabNinja.js"});
        });
    });
}, false);