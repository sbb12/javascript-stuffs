let count = 0;

function lap() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}
function save() {
  console.log(document.getElementById("count-el").innerText);
  displayEntries();
  reset();
}
function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
}

function displayEntries() {
  let newmsg = `${count} `;
  document.getElementById("msg-el").textContent += newmsg;
}

function displayError() {
  document.getElementById("msg-el").textContent = "Error msg";
  document.getElementById("msg-el").style.color = "red";
}
