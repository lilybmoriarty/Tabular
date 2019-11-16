// in future development, the name of the tab in the <title> tags would be the actual domain name

chrome.tabs.getCurrent(tab => {
  let list = localStorage[tab.id].split(",");
  buildOpenURLList("domain-list", list);
});

function buildOpenURLList(divName, list) {
  let listDiv = document.getElementById(divName);

  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = list[i].url;
    a.innerText = list[i];

    li.appendChild(a);
    listDiv.appendChild(li);
  }
}
