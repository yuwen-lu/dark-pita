console.log('background is working');

// chrome.action.onClicked.addListener(async (tab) => {
//   if (tab.id) {
//     chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
//   }
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  let re = /(tailwind.com)|(twitter.com)|(amazon.com)/;
  if (changeInfo.url) {
    if (changeInfo.url.search(re) !== -1) {
      chrome.tabs.sendMessage(tabId, {
        type: 'URL_CHANGED',
        url: changeInfo.url
      });
    }
  }
});

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log({ tab });
  return tab;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'APP_INIT':
      getCurrentTab().then(sendResponse);
      return true;
    default:
      break;
  }
});
