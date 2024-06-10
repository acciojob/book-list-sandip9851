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
    const book = title.value;
    const bookAuthor = author.value;
    const unique = ids.value;

    // Validate that none of the fields are empty
    if (book === "" || bookAuthor === "" || unique === "") {
        alert("Please fill out all fields");
        return;
    }

    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${book}</td>
    <td>${bookAuthor}</td>
    <td>${unique} <button class="delete">X</button></td>`;
    tableBody.append(row);

    // Clear the input fields
    title.value = "";
    author.value = "";
    ids.value = "";

    // Add event listener to the delete button
    row.querySelector(".delete").addEventListener("click", function(event) {
        event.preventDefault();
        deleteRow(event);
    });
}

function deleteRow(event) {
    let element = event.target;
    element.closest('tr').remove();
}
