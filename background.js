// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({ color: "#3aa757" }, function() {
//     console.log("The color is green.");
//   });

//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             // pageUrl: { hostEquals: ".com" }
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//       }
//     ]);
//   });
// });

// let allTabs = [];
// chrome.tabs.query({ currentWindow: true }, function(tabs) {
//   allTabs = [...tabs];
//   buildOpenURLList("list-open-tabs", allTabs);
// });

// function buildOpenURLList(divName, list) {
//   console.log("this is divName", divName);
//   let listDiv = document.getElementById(divName);
//   console.log("this is listDiv", listDiv);

//   for (let i = 0; i < list.length; i++) {
//     let li = document.createElement("li");
//     let a = document.createElement("a");
//     a.href = list[i].url;

//     li.appendChild(a);
//     listDiv.appendChild(li);
//   }
// }
