// Given an array of URLs, build a DOM list of those URLs in the
// browser action popup.
console.log("do i run??!?!!?!?!?!??!");

chrome.tabs.query({ currentWindow: true }, function(tabs) {
  let allTabs = [...tabs];
  buildOpenURLList("list-open-tabs", allTabs);
  let groupedTabs = groupByDomain(allTabs);
  openUniqueTabs(groupedTabs);
});

function buildOpenURLList(divName, list) {
  console.log("this is list", list);
  let listDiv = document.getElementById(divName);

  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = list[i].url;
    a.innerText = list[i].title;

    li.appendChild(a);
    listDiv.appendChild(li);
  }
}

// there are limitations to this - google sites sometimes start with or only include the keyword 'chrome' i.e. https://developer.chrome.com/ will have a different domain than https://mail.google.com even though they are both technically 'google'

function groupByDomain(list) {
  let listUrls = list.map(obj => obj.url);
  let uniqueDomains = {};

  listUrls
    .map(url => {
      return [url.split(".com")[0], url];
    })
    .forEach(domain => {
      if (domain[0].includes(".google") || domain[0].startsWith("chrome")) {
        return uniqueDomains[".google"]
          ? uniqueDomains[".google"].push(domain[1])
          : (uniqueDomains[".google"] = [domain[1]]);
      } else
        uniqueDomains[domain[0]]
          ? uniqueDomains[domain[0]].push(domain[1])
          : (uniqueDomains[domain[0]] = [domain[1]]);
    });
  return uniqueDomains;
}

function openUniqueTabs(obj) {
  for (let key in obj) {
    chrome.tabs.create({ url: "/domainlist.html", active: false }, tab => {
      //this is adding all of the keys to local storage, i need a way to be able to have a page load the information for just a single key
      console.log("this is tab.index", tab.index);
      console.log("this is key", key);
      console.log("this is { key: obj[key] }", { [key]: obj[key] });
      let tabNum = tab.index;
      let domain = { [key]: obj[key] };
      console.log("this is domain", domain);
      localStorage.setItem(tabNum, JSON.stringify(domain));
    });
  }
}
