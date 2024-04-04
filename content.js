chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    chrome.storage.sync.get(['blurName', 'blurImage'], function (data) {
        console.log(data.blurName);
        console.log(data.blurImage);
    });
    if (message.action === "toggleBlurName") {
        if (message.value) {
            blurNames();
        } else {
            unblurNames();
        }
    }
    if (message.action === "toggleBlurImage") {
        if (message.value) {
            blurProfilePictures();
        } else {
            unblurProfilePictures();
        }
    }
});

// Function to hide WhatsApp names and profile pictures
function blurNames() {
    const names = document.querySelectorAll("._ak8q");
    names.forEach(function (element) {
        element.style.filter = `blur(5px)`;
    });

}

function blurProfilePictures() {
    const profile = document.querySelectorAll("._ak8h");
    profile.forEach(function (element) {
        element.style.filter = `blur(5px)`;
    });
}
function unblurNames() {
    const names = document.querySelectorAll("._ak8q");
    names.forEach(function (element) {
        element.style.filter = `blur(0px)`;
    });
}
function unblurProfilePictures() {
    const profile = document.querySelectorAll("._ak8h");
    profile.forEach(function (element) {
        element.style.filter = `blur(0px)`;
    });
}
