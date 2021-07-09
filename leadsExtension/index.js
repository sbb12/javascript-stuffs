function saveLead() {
  console.log("button Clicked");
}

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const leadsEl = document.getElementById("leads-list-el");

let leadsList = "";

saveBtn.addEventListener("click", function () {
  let lead = inputEl.value;
  inputEl.value = "";
  leadsList += `
  <li>
    <a href="${lead}" target="_blank"> 
    ${lead}
    </a>
  </li>`;

  leadsEl.innerHTML = leadsList;
});
