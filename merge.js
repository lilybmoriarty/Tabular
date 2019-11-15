console.log("do i go in here?");

chrome.contextMenus.create({
  title: "Checkbox1",
  type: "checkbox",
  id: "checkbox1"
});
chrome.contextMenus.create({
  title: "Checkbox2",
  type: "checkbox",
  id: "checkbox2"
});
console.log("checkbox1 checkbox2");
