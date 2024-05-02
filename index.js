var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

console.log(isChromium);
console.log(winNav);
console.log(vendorName);
console.log(isOpera);
console.log(isIEedge);
console.log(isIOSChrome);
