var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
    include: /https?:\/\/www\.windowsphone\.com\/.*\/store\/app\/.*/,
    contentScriptFile: [
        data.url('jquery-1.11.2.js'),
        data.url('qrcode.js'),
        data.url('content_script.js')]
});
