let isChromium = window.chrome;
let winNav = window.navigator;
let vendorName = winNav.vendor;
let isOpera = typeof window.opr !== "undefined";
let isIEedge = winNav.userAgent.indexOf("Edg") > -1;
let isIOSChrome = winNav.userAgent.match("CriOS");
let usa = winNav.userAgent;
console.log(isChromium);
console.log(winNav);
console.log(vendorName);
console.log(isOpera);
console.log(isIEedge);
console.log(isIOSChrome);
console.log(usa);

const userAgent = window.navigator.userAgent;
const vendor = window.navigator.vendor;

const info = JSON.stringify({ isChromium, winNav, vendorName, isOpera, isIEedge, isIOSChrome, usa, vendor, userAgent }, null, 2);

console.log(info);

document.querySelector("#info").textContent = info;
