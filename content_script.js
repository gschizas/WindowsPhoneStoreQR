// Get App ID
var pathParts = window.location.pathname.split('/');
var appId = pathParts[pathParts.length - 1];

// Create placeholder

var placeholder = $('<div/>', {id: 'qrCode', height: 200, width: 200});
$('#offerRating').after(placeholder);

// Insert QR Code
var qrcode = new QRCode("qrCode", {
    text: "http://windowsphone.com/s?appId=" + appId,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
