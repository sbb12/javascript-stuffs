function saveLead() {
  console.log("button Clicked");
}

const inputEl = document.getElementById("input-el");
const leadsEl = document.getElementById("leads-list-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("save-tab-btn");
const deleteBtn = document.getElementById("delete-btn");

if (localStorage.getItem("leadsList")) {
  leadsList = localStorage.getItem("leadsList");
  updateLeadsDisplay();
} else {
  leadsList = [];
  localStorage.setItem("leadsList", JSON.stringify(leadsList));
}

saveBtn.addEventListener("click", function () {
  let lead = inputEl.value;
  addToList(lead);
  inputEl.value = "";
  updateLeadsDisplay();
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabUrl = tabs[0].url;
  });
  addToList(tabUrl);
  inputEl.value = "";
  updateLeadsDisplay();
});

deleteBtn.addEventListener("dblclick", function deleteList() {
  deleteBtn.style;
  localStorage.setItem("leadsList", [JSON.stringify([])]);
  updateLeadsDisplay();
});

function addToList(itemToAdd) {
  leadsList = localStorage.getItem("leadsList");
  leadsList = JSON.parse(leadsList);
  leadsList.push(itemToAdd);
  leadsList = JSON.stringify(leadsList);
  localStorage.setItem("leadsList", leadsList);
}

function updateLeadsDisplay() {
  leadsEl.innerHTML = "";
  leadsList = JSON.parse(leadsList);
  for (let lead of leadsList) {
    leadsEl.innerHTML += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
  }
}
