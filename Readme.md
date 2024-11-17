# Day 2: HTML Basics + App Structure

Welcome to Day 2 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll take the first major step toward building our **Student Management App** by creating its structure using HTML. By the end of this session, you'll have a solid layout for your app, complete with a navigation bar, a student list section, and a form to add new students.

## Expected Output
At the end of **Day 2**, you will have knowledge of **HTML tags**, and you will get an expected output like the one shown below:
![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day2.png)

## Overview
In this lesson, you’ll:

1. Learn the fundamentals of structuring web pages with HTML.
2. Create key sections of your app using semantic HTML for better readability and accessibility.
3. Build a reusable and organized layout to prepare for the next steps—styling with CSS and adding interactivity with JavaScript.  
Remember: Learning HTML is the foundation of web development. While it may seem basic, a well-structured HTML file makes your code easier to style, maintain, and scale.


## Objectives  

1. **Master HTML basics**: Use elements like `<nav>`, `<section>`, `<ul>`, `<form>`, and more.
2. **Build a navigation bar**: Help users easily navigate your app.
3. **Create a structured layout**: Add sections for displaying and managing student information.
4. **Use semantic HTML**: Write code that's clear and meaningful for both developers and search engines.

## Steps
### Step 1: Create a New HTML File
1. Open your project root folder in Visual Studio Code.
2. Switch to the "Day-2" Branch
    - Switch to the "Day-2" branch by running the following command in the terminal
    ```bash
     git checkout Day-2
    ```

3. If you don’t already have an `index.html` file, create one:
    - Right-click in the file explorer, choose **New File**, and name it `index.html`.

### Step 2: Add the Basic HTML Structure
1. Every HTML document needs a basic structure. Add the following to your `index.html` file:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Management App</title>
    </head>
    <body>
    </body>
    </html>
    ```

2. **Why this structure matters**:
    - `<!DOCTYPE html>` tells the browser that we’re using HTML5.
    - `<html lang="en">` specifies the language of the document for better accessibility.
    - `<meta charset="UTF-8">` ensures proper rendering of special characters.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ensures responsiveness for mobile devices.

### Step 3: Create a Navigation Bar
1. Inside the `<body>` tag, add a `<nav>` element to create a navigation bar:
    ```html
    <nav>
        <div class="logo">
            <img src="teckas-logo.jpg" alt="logo">
            <h1>Student Management</h1>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#student-list">Student List</a></li>
            <li><a href="#add-student">Add Student</a></li>
        </ul>
    </nav>
    ```

2. **What’s happening here**:

    - `<h1>` represents the main title of your app.
    - `<ul>` creates an unordered list of navigation links.
    - `<a href="#">` is used for navigation. Links like `#student-list` allow users to jump to specific sections on the page.
    - `<div class="logo">`:
        - Acts as a container for the logo and the title.
        - Helps style both elements together.

    - `<img src="teckas-logo.jpg" alt="logo">`:
        - Displays the logo image.
        - The `src` attribute will give the `url` or `path` of the image.
        - The `alt` text provides a description of the image.

3. **Pro Tip**: Test your navigation links after adding the corresponding sections below. Clicking them will scroll to the appropriate section if the `id` matches.

### Step 4: Add a Student List Section
1. Below the `<nav>` element, add a `<section>` for displaying the student list:
    ```html
    <div class="sections">
        <section id="student-list">
            <h2>Student List</h2>
            <ul>
                <!-- Example placeholder for student names -->
                <li>John Doe</li>
                <li>Jane Smith</li>
            </ul>
        </section>
    </div>
    ```

2. **Why use a `<section>`?**

    - Sections help divide your page into logical parts, making it easier to manage and style later.
    - The id="student-list" allows linking directly to this section using the navigation bar.

3. **What’s next?**

    - We’ll dynamically update this list with JavaScript in the coming days.


### Step 5: Create a Form for Adding Students
1. Below the student list section, add another `<section>` for the form:
    ```html
    <section id="add-student">
        <h2>Add Student</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter student name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter student email" required>
            <br>
            <button type="submit">Add Student</button>
        </form>
    </section>
    ```

2. **Form details**:

    - `<form>` creates a container for inputs and buttons.
    - `<label>` describes the input field, improving accessibility for screen readers.
    - `required` ensures users can’t submit empty fields.

3. **Pro Tip**:

    - Keep your inputs simple for now. We’ll handle form submissions and validations in future lessons.

### Step 6: Footer section
1. Below the add student section, add the `<footer>` for the copyright section:
    ```html
    <footer>
        <h2>Copyright &copy; 2024. Job Ready Devs held by <a href="https://teckastechnologies.com/">Teckas Technologies!</a></h2>
    </footer>
    ```

    - `<footer>` Tag
        - The `<footer>` tag is a block-level element used to define a `footer` for a section or the entire webpage. It typically contains metadata, copyright information, or links.

    - `<h2>` Tag
        - The `<h2>` tag is a heading element used to define a subheading on a webpage. It is a block-level element and is the second largest heading in HTML after `<h1>`.

    - `<a>` Tag
        - The `<a>` tag is used to define hyperlinks. It can link to another webpage, a section within the same page, or any external resource.

        **Attributes**:
        - `href`:
            - Specifies the URL of the destination.
            - Example: href="https://teckastechnologies.com/"

        - `target` (Optional):
            - Specifies where to open the linked document (e.g., `_blank` for a new tab).
            - Example: target="_blank"
  

### Step 7: Review and Save Your Work
1. Check your file structure:

    - Does your `<body>` contain the `<nav>`, `<section id="student-list">`, and `<section id="add-student">` elements in the right order?
    - Ensure all tags are properly opened and closed.

2. Save your work using `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac).

### Step 8: Test Your Page
1. Open `index.html` in your browser:
    - Open file explorer and `double-click` the file or drag and drop it into your browser window.

2. Verify the following:
    - The navigation bar appears at the top of the page.
    - The student list section is displayed with placeholder names.
    - The "Add Student" form appears below the student list.

3. Test navigation links:
    - Clicking on links in the navigation bar should scroll to the corresponding sections.

## Push Your Changes to GitHub
Follow these steps to save your progress:

1. **Stage the changes**:
     ```bash
     git add .
     ```
2. **Commit the changes with a descriptive message**:
     ```bash
     git commit -m "Added HTML structure"
     ```
3. **Push the changes to your GitHub repository**:
     ```bash
     git push origin Day-2
     ```
4. **Push the final code to main branch**:
    - Upload your final code to your GitHub main branch:
    ```bash
    git push origin Day-2:main --force
    ```

---

Congratulations! 🎉 You’ve completed Day 2! With your HTML structure in place, you’re ready to start styling your app with CSS in the next session. Keep up the great work, and see you tomorrow!
