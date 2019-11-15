// Given an array of URLs, build a DOM list of those URLs in the
// browser action popup.
// let allTabs = [];
chrome.tabs.query({ currentWindow: true }, function(tabs) {
  allTabs = [...tabs];
  buildOpenURLList("list-open-tabs", allTabs);
});

function buildOpenURLList(divName, list) {
  console.log("this is divName", divName);
  let listDiv = document.getElementById(divName);
  console.log("this is listDiv", listDiv);

  for (let i = 0; i < list.length; i++) {
    console.log("this is list[i]", list[i]);
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = list[i].url;
    a.innerText = list[i].title;

    li.appendChild(a);
    listDiv.appendChild(li);
  }
}
