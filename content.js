chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
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
