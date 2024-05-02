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

const info = JSON.stringify({ isChromium, winNav, vendorName, isOpera, isIEedge, isIOSChrome, usa, vendor, userAgent }, 0, null);

console.log(info);

document.querySelector("#info").textContent = info;

// Function to pretty-print JSON with indentation and handle circular references
function safeStringify(obj, space = 2) {
  let cache = [];
  const result = JSON.stringify(
    obj,
    function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.includes(value)) return;
        cache.push(value);
      }
      return value;
    },
    space
  );
  cache = null; // Enable garbage collection
  return result;
}

// Displaying window object information safely with pretty-printing
document.querySelector("#info2").textContent = safeStringify(window, 2);
