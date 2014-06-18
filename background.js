var MINIMUM_FONT_SIZE = 14;

chrome.commands.onCommand.addListener(function(command) {
    if (command === 'change-minimum-font-size') {
        chrome.fontSettings.getMinimumFontSize({}, function(details) {
            if (details.pixelSize === MINIMUM_FONT_SIZE) {
                chrome.fontSettings.clearMinimumFontSize();
            } else {
                chrome.fontSettings.setMinimumFontSize({'pixelSize': MINIMUM_FONT_SIZE});
            }
        });
    }
});