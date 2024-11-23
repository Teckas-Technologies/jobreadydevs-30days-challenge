# Day 13: Git Workflow + Branching

Welcome to Day 13 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll focus on mastering **Git workflows** and **branching**, essential skills for working collaboratively in software development. Branching allows you to work on new features, bug fixes, or experiments without affecting the main codebase, making it a critical tool for managing projects efficiently.

## Overview
In this lesson, you’ll:

1. **Understand the Git workflow**: Learn the importance of branches in collaborative coding.
2. **Practice creating and merging branches**: Work on a new feature in isolation and integrate it into the main branch.
3. **Handle merge conflicts**: Learn how to resolve conflicts when merging branches (if applicable).  

Why Branching?
Branching allows multiple developers (or even just you!) to work on separate parts of a project simultaneously. It keeps your main branch clean and stable while allowing flexibility for development.

## Objectives
1. Create and switch between branches using Git.
2. Add a new feature to your project in a dedicated branch.
3. Merge the feature branch back into the main branch.
4. Learn to resolve basic merge conflicts (optional but highly recommended).

## Steps
### Step 1: Create a New Branch for a Feature
1. Open your terminal in your project directory.
2. Switch to the "Day-13" Branch
    - Switch to the "Day-13" branch by running the following command in the terminal
    ```bash
     git checkout Day-13
    ```

3. Check the current branch:
    ```bash
    git branch
    ```

    - You should see `Day-13` as the active branch.

3. Create a new branch for a feature (e.g., `add-footer`):
    ```bash
    git checkout -b add-footer
    ```

    - The `-b` flag creates and checks out a new branch `add-footer`.


### Step 2: Make Changes in the New Branch
1. Open your project in your code editor.
2. Add a new footer to your `index.html` file:
    ```html
    <footer>
        <h2>Copyright &copy; 2024. Job Ready Devs held by <a href="https://teckastechnologies.com/">Teckas Technologies!</a></h2>
    </footer>
    ```

3. Save the changes.


### Step 3: Commit Changes to the Feature Branch
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add footer to the application"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin add-footer
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin add-footer:main --force
    ```

---

## Great Job! 🎉
You’ve successfully learned and practiced Git **branching** and **merging** skills essential for any collaborative project. These techniques ensure a clean and organized workflow, whether you’re working alone or in a team. Next week, we’ll dive into handling `POST` requests with `Express.js`, adding even more functionality to your backend! 🚀
