/**
 * Pornstar Social Media Finder - Browser Extension v0.1 (for Firefox)
 * � Socialmediapornstars.com 2021
*/
browser.runtime.onInstalled.addListener(function() {
    browser.contextMenus.create({
        title: "✌ Search %s Social Media Usernames",
        id: 'menu1', // you'll use this in the handler function to identify this context menu item
        contexts: ["selection"],
    });
	browser.contextMenus.create({
        title: "📹 Watch The Best %s 4K Porn Videos",
        id: 'menu2', // you'll use this in the handler function to identify this context menu item
        contexts: ["selection"],
    });
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "menu1") { // here's where you'll need the ID
        var searchstring = info.selectionText;
 browser.tabs.create({url: "https://socialmediapornstars.com/search.php?term=" + searchstring + "&source=chromeapp"})
    }
	if (info.menuItemId === "menu2") { 
        var searchstring = info.selectionText;
 browser.tabs.create({url: "https://socialmediapornstars.com/files/chromeapp/chromeapp-video-out.php?q=" + searchstring})
    }	
});
