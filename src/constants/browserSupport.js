"use strict";

// adjust your browser versions here for BrowserDetector settings
const minimumBrowsers = [
  {
    title: "Chrome",
    flag: "chrome",
    minVersion: "63",
    logo: "chrome-logo.png",
    downloadUrl: "https://www.google.com/intl/en_us/chrome/browser/"
  },
  {
    title: "Firefox",
    flag: "firefox",
    minVersion: "58",
    logo: "firefox-logo.png",
    downloadUrl: "https://www.mozilla.org/en-US/firefox/new/"
  },
  {
    title: "Safari",
    flag: "safari",
    minVersion: "11",
    logo: "safari-logo.png",
    downloadUrl: "https://support.apple.com/downloads/#safari"
  },
  {
    title: "Edge",
    flag: "msedge",
    minVersion: "14",
    logo: "edge-logo.png",
    downloadUrl: "https://www.microsoft.com/en-us/windows/microsoft-edge"
  }
];

export default minimumBrowsers;
