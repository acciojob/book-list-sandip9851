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
  const title = title.value;
  const author = author.value;
  const id = ids.value;
  let row = document.createElement("tr");
  row.innerHTML += `
    <td>${title}</td>
    <td>${author}</td>
    <td>${id}</td>
    <td><button class="delete">Delete</button></td>`;
  tableBody.append(row);
}
function deleteRow(event) {
    let element = event.target;
    element.closest('tr').remove();
}
