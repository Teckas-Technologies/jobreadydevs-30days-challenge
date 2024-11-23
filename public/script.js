console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');
const resetButton = document.querySelector('button[type="reset"]');

const students = []; // Array to store student data


// Fetch all students from the server
fetch('/students')
    .then(response => response.json()) // Parse the JSON data from the server response
    .then(data => {
        console.log(data);  // Log the student data to the console
    })
    .catch(error => {
        console.error('Error fetching students:', error); // Log an error if the fetch fails
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

function addStudent(name, email) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`; // Format the student data
    studentList.appendChild(listItem); // Add the list item to the student list
}

function renderStudentList(students) {
    // Clear the current list
    studentList.innerHTML = '';

    // Loop through the student array and add each to the list
    students.forEach(student => {
        addStudent(student.name, student.email);
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