// content.js
const backgroundImageUrl = chrome.runtime.getURL("images/plaid.jpeg");

// Inject CSS to change the background
const style = document.createElement("style");
style.textContent = `
  body {
    background-image: url("${backgroundImageUrl}") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
  }
`;
document.head.appendChild(style);
