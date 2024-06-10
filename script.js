// Your JS code here
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let ids = document.querySelector("#isbn");
let tableBody = document.querySelector("#book-list");

document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();
    addRow();
});

function addRow() {
  const titleValue = title.value;
  const authorValue = author.value;
  const idValue = ids.value;
  let row = document.createElement("tr");
  row.innerHTML += `
    <td>${titleValue}</td>
    <td>${authorValue}</td>
    <td>${idValue}</td>
    <td><button class="delete">Delete</button></td>`;
  tableBody.append(row);
}
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    deleteRow(e);
  }
});

function deleteRow(event) {
    let element = event.target;
    element.closest('tr').remove();
}
