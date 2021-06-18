/**
 * Pornstar Social Media Finder - Browser Extension v0.1
 * © Socialmediapornstars.com 2021
 * Listens for the app launching, then creates the window.
 * Ported from the original Chrome extension to be compatible with Firefox.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

/*
Open a new tab
*/
function launchData() {
  console.log("Pornstar Social Media Finder - Firefox Addon launched");
   browser.window.create({
     "url": "/index.html"
   });
}

/*
Add launchData() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(launchData);