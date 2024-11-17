# Day 5: JavaScript Functions + Dynamic Rendering

Welcome to Day 5 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll learn how to make your JavaScript more modular and efficient by creating reusable functions to manage and dynamically render the student list. By the end of this session, your app will handle multiple student entries seamlessly, while your code becomes cleaner and easier to maintain.

## Expected Output 
At the end of **Day 5**, you will have knowledge of basic **Javascript Functions** and **Array**, and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day5.gif)

## Overview
In this lesson, you’ll:

1. **Explore JavaScript functions**: Learn how to write and use reusable functions.
2. **Handle data dynamically**: Use an array to store and display student information.
3. **Build scalable code**: Structure your app to accommodate future features.  
Why Functions?: Functions help you avoid repetitive code, make debugging easier, and allow you to add new features without overhauling your existing code. They’re an essential tool for every developer.

## Objectives
1. Understand the importance of functions in JavaScript.
2. Write functions to add and render student data dynamically.
3. Integrate JavaScript functions with the DOM for real-time updates.
4. Prepare your app for scalability by using data arrays.

## JavaScript Methods
1. `push`
    - The push method adds one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

    **Syntax**:
    ```javascript
    array.push(element1, element2, ..., elementN);
    ```

    **Use Cases**:
    - Adding new items to an `array`.
    - Storing user data or other dynamic values.

    **Example**:
    ```javascript
    students.push({ name, email });
    ```

    **Explanation**:
    - Adds a new object containing the name and email values to the students array.  


## Steps
### Step 1: Create a Function to Add a Student
1. Switch to the "Day-5" Branch
    - Switch to the "Day-5" branch by running the following command in the terminal
    ```bash
     git checkout Day-5
    ```
2. Open your `script.js` file.
3. Write the addStudent function:
    - This function will handle the creation of a new student list item:
    ```javascript
    function addStudent(name, email) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`; // Format the student data
    studentList.appendChild(listItem); // Add the list item to the student list
    }
    ```

4. Update the form event listener:
    - Replace the inline DOM manipulation in the form submission code with the new addStudent function:
    ```javascript
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email) {
            alert('Please fill out both fields!');
            return;
        }

        // Call the addStudent function
        addStudent(name, email);

        nameInput.value = '';
        emailInput.value = '';

        alert("Student Added Successfully!");
    });
    ```

5. Test in your browser:
    - Fill out the form and check if the new student is added to the list using the addStudent function.

### Step 2: Create a Function to Render the Student List
1. Write the renderStudentList function:
    - This function will clear the existing list and re-render all students from an array:
    ```javascript
    function renderStudentList(students) {
    // Clear the current list
    studentList.innerHTML = '';

    // Loop through the student array and add each to the list
    students.forEach(student => {
        addStudent(student.name, student.email);
    });
    }
    ```

2. Test with a sample array:
    - Temporarily create a sample array and call the renderStudentList function:
    ```javascript
    const sampleStudents = [
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];

    renderStudentList(sampleStudents);
    ```

3. Refresh your browser:
    - You should see the sample students rendered dynamically in the student list.

### Step 3: Integrate the Render Function with Form Submission
1. Create an array to store student data:
    - Add an empty array to store all student entries:
    ```javascript
    const students = []; // Array to store student data
    ```

2. Update the form event listener:
    - Modify the event listener to add new students to the array and re-render the list:
    ```javascript
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
    ```

3. Test the full functionality:
    - Open your app in the browser and try adding multiple students.
    - Confirm that the list updates dynamically and displays all students in a clean format.

## Push Your Changes to GitHub
Follow these steps to save your progress:

1. **Stage the changes**:
     ```bash
     git add .
     ```

2. **Commit the changes with a descriptive message**:
     ```bash
     git commit -m "Add functions for dynamic student list rendering"
     ```

3. **Push the changes to your GitHub repository**:
     ```bash
     git push origin Day-5
     ```

4. **Push the final code to main branch**:
    - Upload your final code to your GitHub main branch:
    ```bash
    git push origin Day-5:main --force
    ```

---

## You’re Crushing It! 🎉
Congratulations on completing Day 5! You’ve made your app more modular, scalable, and dynamic. Your hard work is paying off, and you’re building skills that will serve you throughout your career. Keep pushing forward—Day 6 is going to be just as exciting! 🚀