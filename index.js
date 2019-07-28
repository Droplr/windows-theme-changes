const addon = require('registry-changes-detector')

exports.register = function (callback) {
    eventSource = addon.register({
        key: "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize",
        value: "SystemUsesLightTheme",
        type: "number"
    }, n => callback(n != 0))
}

exports.isLightMode = function () { addon.getDWord(eventSource) == 1 }
exports.unregister = function () { addon.unregister(eventSource) }

var eventSource





