document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['plaidEnabled'], function(result) {
        document.getElementById('toggleSwitch').checked = result.plaidEnabled;
    });
});

document.getElementById('toggleSwitch').addEventListener('change', function() {
    const enabled = this.checked;
    chrome.storage.local.set({plaidEnabled: enabled}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['content.js']
            });
        });
    });
});
