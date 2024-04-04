chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'hideNamesAndPictures') {
        // Call the function to hide names and pictures
        hideNamesAndPictures();
    }
});

// Function to hide WhatsApp names and profile pictures
function hideNamesAndPictures() {
    console.log("print")
    const names = document.querySelectorAll("._ak8q");
    const profile = document.querySelectorAll("._ak8h");

    names.forEach(function(element) {
        element.style.filter = `blur(5px)`;
    });
    profile.forEach(function(element) {
        element.style.filter = `blur(5px)`;
    });
}
