// Get App ID
var pathParts = window.location.pathname.split('/');
var appId = pathParts[pathParts.length - 1];

var url = "";

// Create placeholder

var placeholder = $('<div/>', {id: 'qrCode', height: 200, width: 200});
if (window.location.host == "www.windowsphone.com") {
    $('#offerRating').after(placeholder);
    url = "http://windowsphone.com/s?appId=" + appId;
}
if (window.location.host == "www.microsoft.com") {
    $('.ph-brand').after(placeholder);
    url = "https://www.microsoft.com//store/apps//" + appId;
    // double slash after microsoft.com to use a default language.
    // double slash after apps to use the default name of the app.
}

// Insert QR Code
if (url != "") {
    var qrCode = new QRCode("qrCode", {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.Q
    });
}