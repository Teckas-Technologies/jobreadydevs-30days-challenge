# Day 18: Integrating CRUD API with the Frontend

Welcome to Day 18 of the **Job-Ready Devs 30-Day Challenge**! 🎉 Today, we’ll fully integrate the CRUD operations built in the backend with the frontend. You’ll use the Fetch API to interact with your backend and dynamically update the UI based on user actions.

## Expected Output 
At the end of **Day 18**, you will have knowledge of **Integrating Backend CRUD APIs to Frontend** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day18.gif)  

## Overview
In this lesson, you’ll:

1. **Learn to use Fetch API**: Connect the frontend to the backend CRUD API.
2. **Implement full CRUD operations on the frontend**: `Add`, `edit`, and `delete` student records.
3. **Update the UI dynamically**: Ensure seamless interaction between the user and the app.  

*Why Integrate CRUD Operations?*  
Integrating CRUD operations connects your frontend and backend, allowing real-time updates and user interaction. This is a vital step in building fully functional, interactive applications.

## Objectives
1. Use Fetch API methods (`GET`, `POST`, `PUT`, `DELETE`) to interact with backend APIs.
2. Build buttons and forms to handle `CRUD` actions directly from the frontend.
3. Update the UI dynamically after each operation.


**What is querySelectorAll?**
    `querySelectorAll` is a JavaScript DOM method that allows you to select and retrieve all elements from the DOM that match a specified CSS selector. It returns a static NodeList, which means the list of elements does not update automatically if the DOM changes.


## Steps

### Step 1: Update the Frontend Structure
1. Switch to the "Day-18" Branch
    - Switch to the "Day-18" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-18
    ```

2. Open your `index.html` file.
3. Modify the student list section to include buttons for editing and deleting records:
    ```html
    <section id="student-list">
        <h2>Student List</h2>
        <ul></ul>
    </section>

    <section id="add-student">
        <h2>Add Student</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Add Student</button>
        </form>
    </section>
    ```

4. Open your `styles.css` file.
5. Add the below code to design the edit & delete btns
  ```css
  /* Individual list item styles in Student List */
  #student-list ul li {
      padding: 0.5rem 0; /* Add vertical padding to list items */
      border-bottom: 1px solid #ddd; /* Add a divider between list items */
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  /* Update & Delete buttons design */
  .action-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
  }

  .delete {
      width: 6rem; /* Set fixed width for the button */
      padding: 0.5rem 1rem; /* Add padding to the button */
      background-color: #e84850; /* Set a light blue background color */
      color: white; /* Set button text color to white */
      border: none; /* Remove default border */
      border-radius: 5px; /* Round the corners of the button */
      cursor: pointer; /* Show pointer cursor on hover */
  }

  .edit {
      width: 6rem; /* Set fixed width for the button */
      padding: 0.5rem 1rem; /* Add padding to the button */
      background-color: #48e890; /* Set a light blue background color */
      color: white; /* Set button text color to white */
      border: none; /* Remove default border */
      border-radius: 5px; /* Round the corners of the button */
      cursor: pointer; /* Show pointer cursor on hover */
  }
  ```

### Step 2: Fetch and Display Students
1. Open your `script.js` file.
2. Update the `renderStudentList` function to include Edit and Delete buttons:
    ```javascript
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
    ```

3. Fetch students from the backend and display them:
    ```javascript
    function fetchStudents() {
        fetch('/students')
            .then(response => response.json())
            .then(data => renderStudentList(data))
            .catch(error => console.error('Error fetching students:', error));
    }

    fetchStudents(); // Load students on page load
    ```

### Step 3: Add a Student
1. Handle form submissions to add a new student:
    ```javascript
    // Select the student form element from the DOM
    const form = document.querySelector('#add-student form');

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
    ```

### Step 4: Edit a Student
1. Add functionality to edit a student:
    ```javascript
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
    ```

2. Add an event listener to handle Edit button clicks:
    ```javascript
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
    ```

### Step 5: Delete a Student
1. Add functionality to delete a student:
    ```javascript
    // Function to delete a student by their ID
    function deleteStudent(id) {
        // Send a DELETE request to the `/students/:id` endpoint with the student's ID
        fetch(`/students/${id}`, {
            method: 'DELETE' // Specify the HTTP method as DELETE for removing a resource
        })
            .then(() => fetchStudents()) // Refresh the student list by fetching the updated data
            .catch(error => console.error('Error deleting student:', error)); // Log any errors that occur during the request
    }
    ```

2. Add an event listener to handle Delete button clicks:
    ```javascript
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
    ```

### Step 6: Test the CRUD Functionality
1. Start your server:
    ```bash
    node server.js
    ```

2. Open your app in a browser.
3. Test the following:
    - **Add Student**: Add a new student using the form.
    - **Edit Student**: Click the Edit button and update the student details.
    - **Delete Student**: Click the Delete button and confirm the deletion.
    - Verify that the frontend updates dynamically after each operation.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Integrate CRUD API with frontend"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-18
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-18:main --force
    ```

---

# Excellent Job! 🎉

You’ve successfully connected your frontend **CRUD operations** to the backend using the Fetch API. Your app is now interactive and fully functional! Tomorrow, we’ll explore advanced features to enhance your application even further. 🚀
