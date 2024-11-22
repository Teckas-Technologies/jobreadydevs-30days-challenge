# Day 8: JavaScript Event Listeners + Data Handling

Welcome to Day 8 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll focus on making your form more interactive and dynamic using **JavaScript Event Listeners**. You’ll capture and handle user inputs seamlessly while enhancing the overall user experience.

## Overview
In this lesson, you’ll:

1. **Master Event Listeners**: Learn how to capture and respond to user actions.
2. **Improve Form Functionality**: Add dynamic behaviors for submitting and resetting the form.
3. **Focus on Usability**: Use feedback like success messages and confirmation dialogs to make your form more user-friendly.  

Why it matters: Interactive forms are essential in every web application. Learning how to handle events effectively will help you build responsive and professional-looking user interfaces.

## Objectives
1. Use JavaScript event listeners to handle form events dynamically.
2. Validate user input and provide meaningful feedback.
3. Add confirmation dialogs and success messages for better usability.

## Steps
### Step 1: Add a Reset Button to the Form
1. Switch to the "Day-8" Branch
    - Switch to the "Day-8" branch by running the following command in the terminal
    ```bash
     git checkout Day-8
    ```
    
2. Open your `index.html` file.
    - Add a `reset` button to your form, below the submit button:

    ```html
    <div class="buttons">
        <button type="submit">Add Student</button>
        <button type="reset">Reset</button>
    </div>
    ```

3. Save the file and refresh your browser. You should now see the `reset` button.


### Step 2: Add Styles to the Reset Button
1. Open your `styles.css` file.
2. Add a new style for the `reset` button to distinguish it from the `submit` button. Use the attribute selector to target the `reset` button.
    ```css
    /* If the button's type is reset, set the background color to red */
    #add-student button[type="reset"] {
        background-color: rgb(218, 78, 78); /* Set background color to red for reset type */
    }
    ```

3. Save your `styles.css` file and refresh your browser. The `reset` button should now have the updated styles.


### Step 3: Add a Confirmation for the Reset Button
1. Open your `script.js` file.
2. Add an event listener to the `reset` button:
    ```javascript
    const resetButton = document.querySelector('button[type="reset"]');

    resetButton.addEventListener('click', (event) => {
        const confirmation = confirm('Are you sure you want to clear the form?');
        if (!confirmation) {
            // Prevent the reset if the user cancels
            event.preventDefault();
        }
    });
    ```

3. Save and Test:
    - Click the `reset` button, and confirm whether the form clears or not based on your response.


### Step 4: Test the Enhanced Form Functionality
1. Open your `index.html` file in a browser.
2. Test the following:
    - Fill out the form and click "Submit." Check if the student is added successfully and the form resets afterward.
    - Click "Reset" and verify that the form only clears when you confirm.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Enhance form functionality with submit and reset buttons"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-8
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-8:main --force
    ```

---

## Fantastic Work! 🎉
You’ve successfully made your form more interactive by handling events dynamically. This is a significant step in building real-world, user-friendly applications. Keep pushing forward—tomorrow, we’ll dive into backend concepts with **Node.js** and **Express** to take your app to the next level. 🚀
