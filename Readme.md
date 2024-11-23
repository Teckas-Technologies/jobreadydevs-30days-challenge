# Day 12: Fetch API + Connecting Frontend and Backend

Welcome to Day 12 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll bridge the gap between the **frontend** and **backend** using JavaScript’s **Fetch API**. You’ll retrieve data from your server and dynamically display it on your frontend, making your app interactive and user-friendly.

## Expected Output 
At the end of **Day 12**, you will have knowledge of **Fetch JSON data from frontend** and **Show the response in HTML format** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day12.gif)

## Overview
In this lesson, you’ll:

1. **Learn the Fetch API**: Master how to send HTTP requests to a backend and handle responses.
2. **Integrate frontend and backend**: Dynamically fetch and display student data on the UI.
3. **Handle errors gracefully**: Ensure your app remains user-friendly even when something goes wrong.  

Why Fetch API?
The Fetch API is a modern, promise-based way to interact with APIs. It’s an essential tool for connecting your frontend to any backend, enabling real-time updates and dynamic interactions.


## Objectives
1. Use the Fetch API to retrieve data from a backend `/students` endpoint.
2. Dynamically display the retrieved data on the frontend.
3. Prepare the app for future API interactions like creating and updating data.

## Explanation of Functions
1. **Error()**
    - The `Error()` constructor creates an error object that represents a runtime error. It can be used to define custom error messages and throw them when something goes wrong. For example, new Error('Custom error message') generates an error that can be caught and handled in a `try-catch` block or a `.catch()` method.

2. **forEach()**
    - The `forEach()` method is used to execute a provided function once for each element in an array. It is commonly used for iterating over arrays and performing operations on each element. Unlike `map()`, it does not return a new array but is primarily used for side effects like `DOM` manipulation or logging.


## Steps
### Step 1: Update the Frontend Structure
1. Switch to the "Day-12" Branch
    - Switch to the "Day-12" branch by running the following command in the terminal
    ```bash
     git checkout Day-12
    ```

2. Open your `index.html` file.
    - Ensure the student list section is ready to display data dynamically:

    ```html
    <section id="student-list">
        <h2>Student List</h2>
        <ul></ul>
    </section>
    ```

3. Save the file and confirm the structure matches your requirements.


### Step 2: Fetch Student Data from the Backend
1. Open your `script.js` file.
2. Use the Fetch API to make a GET request to the `/students` endpoint:
    ```javascript
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
            console.error('Error fetching students:', error);
        });
    ```

3. Save the file and ensure your backend server is running.

### Step 3: Create a Function to Render the Student List
1. In `script.js`, write the `renderStudentList` function to populate the list dynamically:
    ```javascript
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
    ```

2. Save the file.


### Step 4: Test the Integration
1. Start your server:
    ```bash
    node server.js
    ```

2. Open `index.html` in your browser.
3. Verify that the student list is dynamically populated with data from your backend.


### Step 5: Handle Errors Gracefully (Optional)
1. Update the Fetch API logic to handle errors effectively:
    ```javascript
    fetch('/students')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderStudentList(data);
        })
        .catch(error => {
            const studentList = document.querySelector('#student-list ul');
            studentList.innerHTML = '<li>Error loading student data</li>'; // Display error message in the UI
            console.error('Error fetching students:', error); // Log the error for debugging
        });
    ```

2. Test error handling by temporarily stopping the backend server.
    - Verify that an error message is displayed on the frontend.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Connect frontend to backend using Fetch API"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-12
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-12:main --force
    ```

---

## Excellent Work! 🎉
You’ve successfully connected your frontend to the backend using the Fetch API. This integration is a critical milestone in creating full-stack web applications. Get ready for tomorrow’s session, where we’ll explore handling **POST requests** to create new data dynamically! 🚀
