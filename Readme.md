# Day 3: CSS Basics + Styling the Interface
Welcome to Day 3 of the **Job-Ready Devs 30-Day Challenge!** 🎨 Today, we’ll focus on improving the visual appeal of our **Student Management App**. With CSS, you’ll transform the basic structure from Day 2 into a sleek, user-friendly interface. By the end of this session, your app will look professional and modern, setting the stage for more advanced features in the coming days.

## Expected Output
At the end of **Day 3**, you will have knowledge of **CSS style attributes** and **types of selectors**, and you will get an expected output like the one shown below:
![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day3.png)

## Overview
In this lesson, you’ll:

1. **Learn CSS basics**: Explore key properties for styling web pages.
2. **Enhance the layout**: Style the navigation bar, student list, and form sections.
3. **Focus on typography and design consistency**: Apply color schemes, spacing, and borders for a polished look.
4. **Boost your confidence**: See how a few lines of CSS can make a big difference!  
Remember: Good design improves user experience. While functionality is crucial, an attractive and intuitive interface will make your app stand out.

## Objectives
1. Learn and apply CSS basics: selectors, properties, and values.
2. Style the navigation bar for a modern and functional look.
3. Design the student list and form sections with clean layouts and consistent themes.
4. Practice linking CSS to HTML for seamless integration.

## CSS Style Selectors
1. **Element Selector**
    - The element selector applies styles to all elements of a specific type.

    **Example**:
    ```css
    nav {
        background-color: #007BFF; /* Applies to all <nav> elements */
    }
    ```

    - Targets all `<nav>` elements in the `html` document.
    - Commonly used for global styles.

2. **Class Selector**
    - The class selector applies styles to elements with a specific class attribute.
    **Syntax**:
    ```css
    .class-name {
        property: value;
    }
    ```

    **Example**:
    ```css
    .nav-item {
        padding: 0.5rem; /* Adds padding to elements with the class 'nav-item' */
    }
    ```

    - Use a period (`.`) followed by the class name.
    - Multiple elements can share the same class.

3. **ID Selector**
    - The ID selector applies styles to a single element with a unique ID attribute.
    **Syntax**:
    ```css
    #id-name {
        property: value;
    }
    ```

    **Example**:
    ```css
    #student-list {
        margin: 2rem 0; /* Applies to the element with ID 'student-list' */
    }
    ```

    - Use a hash (`#`) followed by the ID name.
    - IDs must be unique on a webpage.


## CSS basic attributes

1. `background-color`
    - Sets the background color of an element.  
    **Example**:
    ```css
    background-color: #007BFF; // hexadecimal values define the different colors
    ```

2. `color`
    - Defines the text color inside an element.  
    **Example**:
    ```css
    color: white;
    ```

3. `padding`
    - Adds space inside an element, between its content and its border.  
    **Example**:
    ```css
    padding: 1rem;
    ```

4. `margin`
    - Adds space outside an element, between it and adjacent elements.  
    **Example**:
    ```css
    margin: 2rem 0;
    ```

5. `border`
    - Specifies the border style, width, and color of an element.  
    **Example**:
    ```css
    border: 1px solid #ddd;
    ```

6. `border-radius`
    - Rounds the corners of an element.  
    **Example**:
    ```css
    border-radius: 5px;
    ```

7. `display`
    - Controls the layout behavior of an element (e.g., flex, block, inline).  
    **Example**:
    ```css
    display: flex;
    ```

8. `gap`
    - Adds space between child elements in a flex or grid container.  
    **Example**:
    ```css
    gap: 1rem;
    ```

9. `text-decoration`
    - Adds or removes text decoration (e.g., underline, none).  
    **Example**:
    ```css
    text-decoration: none;
    ```

10. `cursor`
    - Changes the mouse cursor style when hovering over an element.  
    **Example**:
    ```css
    cursor: pointer;
    ```

---

## Steps
### Step 1: Create a CSS File
1. Switch to the "Day-3" Branch
    - Switch to the "Day-3" branch by running the following command in the terminal
    ```bash
     git checkout Day-3
    ```
2. In your project folder, create a new file named `styles.css`.
    **Why?**: Separating CSS from HTML keeps your code organized and easier to manage.

3. Link the CSS file to your `index.html` file by adding the following inside the `<head>` section:
    ```html
    <link rel="stylesheet" href="styles.css">
    ```
    - This line tells the browser to apply the styles defined in styles.css to your HTML file.

### Step 2: Style the Navigation Bar
1. Open the `styles.css` file.

2. Add the following CSS code to style the navigation bar:
    ```css
    /* Global styles */
    * {
        width: 100%; /* Full width for the whole page */
        box-sizing: border-box; /* Keep the exact size of elements */
        margin: 0; /* Remove spaces outside all elements */
        padding: 0; /* Remove spaces inside all elements */
    }

    /* Navbar section styles */
    nav {
        width: 100%; /* Make navbar span the entire width */
        background-color: black; /* Set the navbar background color to black */
        color: white; /* Set the text color to white */
        padding: 1rem; /* Add padding inside the navbar */
        display: flex; /* Use flexbox for layout */
        gap: 1%; /* Add spacing between child elements inside the navbar */
        justify-content: space-between; /* Space out items horizontally */
        align-items: center; /* Align items vertically */
    }

    /* Logo container styles */
    .logo {
        display: flex; /* Default layout for flex is row */
        align-items: center; /* Vertically align items */
        justify-content: center; /* Center items horizontally */
        gap: 4px; /* Add a small gap between the logo image and text */
    }

    /* Logo image styles */
    .logo img {
        width: 3rem; /* Set fixed width for logo image */
        height: 3rem; /* Set fixed height for logo image */
        object-fit: cover; /* Ensure the image fits the container */
        border-radius: 50%; /* Make the image circular */
    }

    /* Navbar title styles */
    nav h1 {
        margin: 0; /* Remove default margin around the title */
    }

    /* Navbar unordered list styles */
    nav ul {
        list-style: none; /* Remove default bullet points */
        padding: 0; /* Remove default padding for the list */
        display: flex; /* Arrange list items in a row */
        justify-content: end; /* Align list items to the right */
        gap: 1.5rem; /* Add space between each list item */
    }

    /* Navbar list item styles */
    nav ul li {
        width: auto; /* Allow list items to take up only necessary width */
        display: flex; /* Flexbox for alignment */
        justify-content: center; /* Center list items horizontally */
        align-items: center; /* Center list items vertically */
    }

    /* Navbar link styles */
    nav ul li a {
        color: white; /* Set link text color to white */
        text-decoration: none; /* Remove underline from links */
        font-weight: bold; /* Make link text bold */
    }

    /* Navbar link hover effect */
    nav ul li a:hover {
        text-decoration: underline; /* Add underline when hovering over links */
        text-underline-offset: 5px; /* Add spacing between text and underline */
    }
    ```

3. Save the file and refresh your browser to see the updated navigation bar:
    - Notice the blue background, white text, and clean spacing between items.
    - Hover over the links to see the underline effect.

### Step 3: Style the Student List Section
1. Add the following CSS code to style the student list:
    ```css
    /* Styles for the sections container */
    .sections {
        display: flex; /* Use flexbox for layout */
        width: 100%; /* Make the container take up the full width of the page */
        gap: 3%; /* Add spacing between child elements */
        padding: 1rem; /* Add padding inside the container */
    }

    /* Student List section styles */
    #student-list {
        width: 50%; /* Assign 50% of the page width to this section */
        margin: 2rem 0; /* Add space above and below the section */
        padding: 1rem; /* Add padding inside the section */
        background-color: #f9f9f9; /* Set a light gray background color */
        border: 1px solid #ddd; /* Add a light border around the section */
        border-radius: 5px; /* Round the corners of the section */
    }

    /* Student List heading styles */
    #student-list h2 {
        margin-bottom: 1rem; /* Add spacing below the heading */
    }

    /* Unordered list in the Student List section */
    #student-list ul {
        list-style: none; /* Remove default bullet points */
        padding: 0; /* Remove default padding */
    }

    /* Individual list item styles in Student List */
    #student-list ul li {
        padding: 0.5rem 0; /* Add vertical padding to list items */
        border-bottom: 1px solid #ddd; /* Add a divider between list items */
    }

    /* Remove bottom border for the last list item */
    #student-list ul li:last-child {
        border-bottom: none; /* Remove the bottom border */
    }
    ```

2. Save the file and refresh your browser:
    - The section now has a light gray background with rounded corners.
    - Student names are neatly separated by lines.

### Step 4: Style the Add Student Form
1. Add the following CSS code to style the form:
    ```css
    /* Add Student section styles */
    #add-student {
        width: 50%; /* Assign 50% of the page width to this section */
        margin: 2rem 0; /* Add space above and below the section */
        padding: 1rem; /* Add padding inside the section */
        background-color: #f9f9f9; /* Set a light gray background color */
        border: 1px solid #ddd; /* Add a light border around the section */
        border-radius: 5px; /* Round the corners of the section */
    }

    /* Add Student section heading styles */
    #add-student h2 {
        margin-bottom: 1rem; /* Add spacing below the heading */
    }

    /* Form styles inside Add Student section */
    #add-student form {
        display: flex; /* Use flexbox for layout */
        flex-direction: column; /* Stack form elements vertically */
        gap: 0.5rem; /* Add spacing between form elements */
    }

    /* Label styles inside Add Student section */
    #add-student label {
        font-weight: bold; /* Make label text bold */
    }

    /* Input field styles in Add Student section */
    #add-student input {
        padding: 0.5rem; /* Add padding inside input fields */
        border: 1px solid #ddd; /* Add a light border to input fields */
        border-radius: 5px; /* Round the corners of input fields */
    }

    /* Button styles in Add Student section */
    #add-student button {
        width: 10rem; /* Set fixed width for the button */
        padding: 0.5rem 1rem; /* Add padding to the button */
        background-color: #48bde8; /* Set a light blue background color */
        color: white; /* Set button text color to white */
        border: none; /* Remove default border */
        border-radius: 5px; /* Round the corners of the button */
        cursor: pointer; /* Show pointer cursor on hover */
    }

    /* Button hover effect */
    #add-student button:hover {
        background-color: #5AC2E7; /* Change to a darker blue on hover */
    }
    ```

2. Save the file and refresh your browser:
    - The form now looks clean and professional, with visually appealing input fields and buttons.

### Step 5: Style the Footer section
1. Add the following CSS code to style the footer:
    ```css
    /* Footer section styles */
    footer {
        width: 100%; /* Make footer span the full width */
        height: 4rem; /* Set footer height */
        background: black; /* Set footer background color to black */
        position: fixed; /* Fix footer to the bottom of the viewport */
        bottom: 0; /* Align footer to the bottom */
        justify-content: center; /* Center footer content horizontally */
        align-items: center; /* Center footer content vertically */
    }

    /* Footer text styles */
    footer h2 {
        color: #fff; /* Set footer text color to white */
        font-size: 14px; /* Set font size */
        text-align: center; /* Center align text */
        line-height: 4rem; /* Vertically center text */
        font-weight: normal; /* Use normal font weight */
    }

    /* Footer link styles */
    footer a {
        color: #5AC2E7; /* Set link color to light blue */
    }
    ```

    2. Save the file and refresh your browser:
    - The form now looks clean and professional, with visually appealing `footer` with copyright text.

### Step 6: Responsiveness styles for mobile screen
1. Add the following CSS code to style entire design suitable for mobile:
    ```css
    /* Responsive styles for smaller screens */
    @media (max-width: 768px) {
        nav h1 {
            font-size: 14px; /* Reduce font size for smaller screens */
        }
        .sections {
            display: flex; /* Ensure flexbox layout is used */
            flex-direction: column; /* Stack sections vertically */
            gap: 0 !important; /* Remove gap between sections */
        }

        #student-list {
            width: 100% !important; /* Make the Student List section take full width */
        }

        #add-student {
            width: 100% !important; /* Make the Add Student section take full width */
        }
    }
    ```

    - The `@media` query is used to apply specific styles based on the screen's width or other characteristics, enabling responsive design. Here, it adjusts the layout for screens with a width of `768px` or less, ensuring a mobile-friendly layout.


### Step 7: Test Your Layout and Style
1. Open your app in the browser and verify:
    - The navigation bar is styled and functional.
    - The student list section is neatly organized.
    - The form has a polished design.
    - The footer has the copyright text with respective colors and alignments.

2. Experiment:
    - Adjust colors, padding, or fonts in `styles.css` to see the effects.
    - Share screenshots of your styled app in the community chat to inspire others!

## Push Your Changes to GitHub
Follow these steps to save your progress:

1. **Stage the changes**:
     ```bash
     git add .
     ```  

2. **Commit the changes with a descriptive message**:
     ```bash
     git commit -m "Style the Student Management App with CSS"
     ```  

3. **Push the changes to your GitHub repository**:
     ```bash
     git push origin Day-3
     ```  

4. **Push the final code to main branch**:
    - Upload your final code to your GitHub main branch:
    ```bash
    git push origin Day-3:main --force
    ```

---

### Amazing job! 🎉  
Your app now has a clean and professional look. Keep up the great work, and get ready for Day 4!