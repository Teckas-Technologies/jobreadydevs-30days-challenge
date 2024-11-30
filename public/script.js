console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');
const resetButton = document.querySelector('button[type="reset"]');

const students = []; // Array to store student data

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


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        alert('Please fill out both fields!');
        return;
    }

    // Add the new student to the array
    students.push({ name, email });

    // Re-render the student list
    renderStudentList(students);

    nameInput.value = '';
    emailInput.value = '';

    alert("Student Added Successfully!");
});

// Function to render the student list in the DOM
function renderStudentList(students) {
    const studentList = document.querySelector('#student-list ul'); // Select the student list container
    studentList.innerHTML = ''; // Clear the list before rendering

    // Iterate over the array of students
    students.forEach(student => {
        const listItem = document.createElement('li'); // Create a new list item element
        listItem.textContent = `${student.name} - ${student.email}`; // Set the content to the student's name and email
        studentList.appendChild(listItem); // Append the list item to the student list
    });
}

resetButton.addEventListener('click', (event) => {
    const confirmation = confirm('Are you sure you want to clear the form?');
    if (!confirmation) {
        // Prevent the reset if the user cancels
        event.preventDefault();
    }
});

// const sampleStudents = [
//     { name: 'John Doe', email: 'john.doe@example.com' },
//     { name: 'Jane Smith', email: 'jane.smith@example.com' }
// ];

// renderStudentList(sampleStudents);