document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button
    document.getElementById('yourButtonId').addEventListener('click', function() {
        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'hideNamesAndPictures' });
        });
    });
});