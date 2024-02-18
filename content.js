chrome.storage.local.get(['plaidEnabled'], function(result) {
    if (result.plaidEnabled) {
        const backgroundImageUrl = chrome.runtime.getURL("images/plaid.jpeg");
        const style = document.createElement("style");
        style.id = 'plaidStyle'; // Add an ID for easy removal
        style.textContent = `
          body {
            background-image: url("${backgroundImageUrl}") !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
          }
        `;
        document.head.appendChild(style);
    } else {
        const existingStyle = document.getElementById('plaidStyle');
        if (existingStyle) {
            existingStyle.remove(); // Remove the style if Plaid mode is off
        }
    }
});
