document.addEventListener('DOMContentLoaded', function () {

    var blurNameToggle = document.getElementById('blurNameToggle');
    var blurImageToggle = document.getElementById('blurImageToggle');


    chrome.storage.sync.get(['blurName', 'blurImage', 'nameTabId', 'ImageTabId'], function (data) {
        blurNameToggle.checked = data.blurName;
        blurImageToggle.checked = data.blurImage;
        if (data.blurName) {
            chrome.tabs.sendMessage(data.nameTabId, { action: "toggleBlurName", value: true });
        }
        if (data.blurImage) {
            chrome.tabs.sendMessage(data.ImageTabId, { action: "toggleBlurImage", value: true });
        }
    });

    blurNameToggle.addEventListener('change', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlurName", value: blurNameToggle.checked });
            chrome.storage.sync.set({ blurName: blurNameToggle.checked, nameTabId: tabs[0].id });
        });

    });

    blurImageToggle.addEventListener('change', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlurImage", value: blurImageToggle.checked });
            chrome.storage.sync.set({ blurImage: blurImageToggle.checked, ImageTabId: tabs[0].id });
        });
    });
});