# Day 12: Fetch API + Connecting Frontend and Backend

Welcome to Day 12 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll bridge the gap between the **frontend** and **backend** using JavaScript’s **Fetch API**. You’ll retrieve data from your server and dynamically display it on your frontend, making your app interactive and user-friendly.

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
    fetch('/students')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the fetched student data for debugging
            renderStudentList(data); // Call a function to display the data
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
    ```

3. Save the file and ensure your backend server is running.

### Step 3: Create a Function to Render the Student List
1. In `script.js`, write the `renderStudentList` function to populate the list dynamically:
    ```javascript
    function renderStudentList(students) {
        const studentList = document.querySelector('#student-list ul');
        studentList.innerHTML = ''; // Clear the list before rendering

        students.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - ${student.email}`;
            studentList.appendChild(listItem);
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
            studentList.innerHTML = '<li>Error loading student data</li>';
            console.error('Error fetching students:', error);
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

























# Day 12: Fetch API + Connecting Frontend and Backend

Welcome to Day 12 of the Job-Ready Devs 30-Day Challenge! Today, you’ll use JavaScript’s Fetch API to connect the frontend to the backend. You’ll retrieve student data from the server and dynamically display it on the frontend. This is where your app begins to interact seamlessly between the client and server.

## Objectives
1. Learn how to use the Fetch API to retrieve data from a backend.
2. Connect the backend’s `/students` endpoint to the frontend.
3. Dynamically display the retrieved data on the frontend using JavaScript.

---

## Steps

### Step 1: Update the Frontend Structure
1. Open your `index.html` file.
2. Ensure that your student list section is properly set up with an empty `<ul>` element:
    ```html
    <section id="student-list">
        <h2>Student List</h2>
        <ul></ul>
    </section>
    ```

### Step 2: Fetch Student Data from the Backend
1. Open your script.js file.
2. Use the Fetch API to retrieve data from the /students endpoint:
    ```javascript
    fetch('/students')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the student data for testing
            renderStudentList(data); // Call a function to display the data
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
    ```

3. Save the file.

### Step 3: Create a Function to Render the Student List
1. In `script.js`, create the renderStudentList function:
    ```javascript
    function renderStudentList(students) {
        const studentList = document.querySelector('#student-list ul');
        studentList.innerHTML = ''; // Clear the list before rendering

        students.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - ${student.email}`;
            studentList.appendChild(listItem);
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
3. Verify that the student list is populated dynamically with data from the backend.


### Step 5: Handle Errors Gracefully (Optional)
1. Update the Fetch API logic to display an error message on the frontend if the request fails:
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
            studentList.innerHTML = '<li>Error loading student data</li>';
            console.error('Error fetching students:', error);
        });
    ```

2. Save the file and test by temporarily stopping the server to trigger an error.


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

## Excellent work! 🎉
You’ve successfully connected your frontend to the backend using the Fetch API. Your app can now dynamically display data from the server, taking another big step toward full-stack development. Keep it up and prepare for tomorrow’s session on handling POST requests!