// set darkmode variable if not set
chrome.storage.local.get(["darkMode"]).then((result) => {
  if (result.darkMode === undefined) {
    chrome.storage.local.set({ darkMode: false });
  }
});

// call darkmode script on start darkMode is on
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.local.get(["darkMode"]).then((result) => {
    if (result.darkMode) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["appOn.js"],
        });
      });
    }
  });
});

// // call darkmode script on start darkMode is on
// chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
//     chrome.storage.local.get(["darkMode"]).then((result) => {
//       if (result.darkMode) {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//           chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ["appOn.js"],
//           });
//         });
//       }
//     });
//   });