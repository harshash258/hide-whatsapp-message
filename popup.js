document.addEventListener('DOMContentLoaded', function () {

    var blurNameToggle = document.getElementById('blurNameToggle');
    var blurImageToggle = document.getElementById('blurImageToggle');


    chrome.storage.sync.get(['blurName', 'blurImage'], function (data) {
        blurNameToggle.checked = data.blurName;
        blurImageToggle.checked = data.blurImage;
    });

    // Send message to content script when checkboxes are toggled
    blurNameToggle.addEventListener('change', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlurName", value: blurNameToggle.checked });
        });
        chrome.storage.sync.set({ blurName: blurNameToggle.checked });
    });

    blurImageToggle.addEventListener('change', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlurImage", value: blurImageToggle.checked });
        });
        chrome.storage.sync.set({ blurImage: blurImageToggle.checked });
    });
});