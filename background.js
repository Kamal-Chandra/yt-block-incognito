// Updated background.js
chrome.runtime.onStartup.addListener(init);
chrome.runtime.onInstalled.addListener(init);

async function init() {
  // Always remove the rule first to ensure clean state
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1]
  });

  // Check if we're in split incognito mode
  if (chrome.extension.inIncognitoContext) {
    console.log("Incognito context detected - adding YouTube block rule");
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||youtube.com",
          resourceTypes: ["main_frame"]
        }
      }]
    });
  } else {
    console.log("Normal context - not adding block rule");
  }
}

// Add listener for tab creation to handle cases where incognito status changes
chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.incognito) {
    // Add rule if it's an incognito tab
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||youtube.com",
          resourceTypes: ["main_frame"]
        }
      }]
    });
  } else {
    // Remove rule if it's a normal tab
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    });
  }
});// Updated background.js
chrome.runtime.onStartup.addListener(init);
chrome.runtime.onInstalled.addListener(init);

async function init() {
  // Always remove the rule first to ensure clean state
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1]
  });

  // Check if we're in split incognito mode
  if (chrome.extension.inIncognitoContext) {
    console.log("Incognito context detected - adding YouTube block rule");
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||youtube.com",
          resourceTypes: ["main_frame"]
        }
      }]
    });
  } else {
    console.log("Normal context - not adding block rule");
  }
}

// Add listener for tab creation to handle cases where incognito status changes
chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.incognito) {
    // Add rule if it's an incognito tab
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||youtube.com",
          resourceTypes: ["main_frame"]
        }
      }]
    });
  } else {
    // Remove rule if it's a normal tab
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    });
  }
});