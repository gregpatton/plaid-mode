chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({plaidEnabled: false}); // Default to disabled
});
