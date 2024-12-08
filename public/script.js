console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student-form form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');
const resetButton = document.querySelector('button[type="reset"]');

const students = []; // Array to store student data

function fetchStudents() {
    // Fetch student data from the server
    fetch('/students')
        .then(response => {
            // Check if the server response is valid
            if (!response.ok) {
                // Throw an error if the response is not valid
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse and return the response as JSON
        })
        .then(data => {
            console.log(data); // Log the fetched student data for debugging
            renderStudentList(data); // Call a function to display the data
        })
        .catch(error => {
            // Handle errors that occur during fetch or JSON parsing
            const studentList = document.querySelector('#student-list ul');
            studentList.innerHTML = '<li>Error loading student data</li>'; // Display error message in the UI
            console.error('Error fetching students:', error); // Log the error for debugging
        });
}

fetchStudents();

// Add a 'submit' event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Get the value of the 'name' input field and remove whitespace
    const name = document.querySelector('#name').value.trim();

    // Get the value of the 'email' input field and remove whitespace
    const email = document.querySelector('#email').value.trim();

    // Make a POST request to the '/students' endpoint to add a new student
    fetch('/students', {
        method: 'POST', // Specify the HTTP method as POST
        headers: { 'Content-Type': 'application/json' }, // Specify the content type as JSON
        body: JSON.stringify({ name, email }) // Send the name and email as JSON in the request body
    })
        .then(response => response.json()) // Parse the JSON response
        .then(() => {
            fetchStudents(); // Refresh the list of students by fetching the updated data
            form.reset(); // Clear the form fields after successful submission
        })
        .catch(error => console.error('Error adding student:', error)); // Log any errors to the console
});

// Function to render the student list in the DOM
function renderStudentList(students) {
    // Select the parent element where the student list will be rendered
    const studentList = document.querySelector('#student-list ul');

    // Clear the existing content of the list to avoid duplicates
    studentList.innerHTML = '';

    // Iterate through the array of student objects
    students.forEach(student => {
        // Create a new list item element for each student
        const listItem = document.createElement('li');

        // Set the inner HTML of the list item with student details and buttons
        listItem.innerHTML = `
            <p>${student.name} - ${student.email}</p>
            <div class="action-btns">
                <button class="edit" data-id="${student._id}">Edit</button>
                <button class="delete" data-id="${student._id}">Delete</button>
            </div>
        `;

        // Append the list item to the parent student list element
        studentList.appendChild(listItem);
    });

    // Attach event listeners to the newly added buttons (e.g., Edit and Delete)
    attachEventListeners1();
    attachEventListeners2();
}

// Function to edit an existing student's details
function editStudent(id, name, email) {
    // Send a PUT request to the `/students/:id` endpoint with the student's ID
    fetch(`/students/${id}`, {
        method: 'PUT', // Specify the HTTP method as PUT for updating a resource
        headers: { 'Content-Type': 'application/json' }, // Set the request headers to indicate JSON content
        body: JSON.stringify({ name, email }) // Send the updated name and email as JSON in the request body
    })
        .then(response => response.json()) // Parse the JSON response from the server
        .then(() => fetchStudents()) // Refresh the student list by fetching the updated data
        .catch(error => console.error('Error updating student:', error)); // Log any errors that occur during the request
}

// Function to attach event listeners to edit buttons
function attachEventListeners1() {
    // Select all elements with the 'edit' class and iterate over them
    document.querySelectorAll('.edit').forEach(button => {
        // Add a click event listener to each 'edit' button
        button.addEventListener('click', () => {
            // Get the student's ID from the button's dataset
            const id = button.dataset.id;
            // Prompt the user to enter a new name for the student
            const name = prompt('Enter new name:');
            // Prompt the user to enter a new email for the student
            const email = prompt('Enter new email:');
            // If both name and email are provided, call the editStudent function
            if (name && email) {
                editStudent(id, name, email); // Update the student's details
            }
        });
    });
}

// Function to delete a student by their ID
function deleteStudent(id) {
    // Send a DELETE request to the `/students/:id` endpoint with the student's ID
    fetch(`/students/${id}`, {
        method: 'DELETE' // Specify the HTTP method as DELETE for removing a resource
    })
        .then(() => fetchStudents()) // Refresh the student list by fetching the updated data
        .catch(error => console.error('Error deleting student:', error)); // Log any errors that occur during the request
}

// Function to attach event listeners to delete buttons
function attachEventListeners2() {
    // Select all elements with the 'delete' class and iterate over them
    document.querySelectorAll('.delete').forEach(button => {
        // Add a click event listener to each 'delete' button
        button.addEventListener('click', () => {
            // Get the student's ID from the button's dataset
            const id = button.dataset.id;
            // Display a confirmation dialog to the user
            if (confirm('Are you sure you want to delete this student?')) {
                // If the user confirms, call the deleteStudent function
                deleteStudent(id); // Remove the student with the specified ID
            }
        });
    });
}

// resetButton.addEventListener('click', (event) => {
//     const confirmation = confirm('Are you sure you want to clear the form?');
//     if (!confirmation) {
//         // Prevent the reset if the user cancels
//         event.preventDefault();
//     }
// });