console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture and trim inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate inputs
    if (!name || !email) {
        alert('Both fields are required!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`;

    // Add the new student to the list
    studentList.appendChild(listItem);

    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';
});