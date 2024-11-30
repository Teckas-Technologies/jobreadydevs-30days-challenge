# Day 15: Introduction to MongoDB + Setting Up a Database

Welcome to Day 15 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll take a big step toward building a full-stack application by integrating a **MongoDB database** with your **Node.js server**. This allows you to store, retrieve, and manage your data persistently, unlocking the power of database-backed applications.


## Expected Output 
At the end of **Day 15**, you will have knowledge of **Database**, **MongoDB** and connect the mongodb to Node.js server and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day15.png)  

## Overview
In this lesson, you’ll:

1. **Learn about MongoDB**: Understand the basics of databases and `MongoDB’s` role in web development.
2. **Set up a MongoDB instance**: Install and run MongoDB locally or use a cloud-based solution.
3. **Connect to MongoDB with Mongoose**: Integrate MongoDB into your `Node.js` server using the powerful `mongoose` library.  

*Why MongoDB?*
MongoDB’s flexibility, scalability, and `JSON`-like structure make it ideal for modern web applications. It’s widely used in the industry, and learning it sets you up for success in real-world projects.

## Objectives
1. Understand the role of databases and MongoDB in web development.
2. Set up and configure a local or cloud-based MongoDB instance.
3. Connect `MongoDB` to your `Node.js` server using Mongoose.

## Introduction to Databases and MongoDB

1. **What is a Database?**  
   A database is an organized collection of data that allows efficient storage, retrieval, and management of information. It's essential for storing structured information like student details in a student management app.

2. **What is MongoDB?**  
   MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It is ideal for applications requiring scalability and handling diverse types of data.

3. **What is a Collection?**  
   A collection is a group of documents in MongoDB, similar to a table in a relational database. For example, a `students` collection could store individual student records.

4. **Why Use MongoDB for a Student Management App?**  
   MongoDB allows us to store, update, and query student information efficiently. Its flexibility is perfect for managing varying types of student data, such as grades, attendance, and personal details.  


## Explanation of Key Elements in the Code:

1. **require()**
   - This is a `Node.js` function used to import modules or libraries into your code.
   - It loads the mongoose package so you can use its features for MongoDB interaction.
   - Without `require()`, you cannot access external modules in your application.
   - Think of it as linking tools or libraries to your code.

2. **mongoose**
   - This is the imported object from the `mongoose` package.
   - It acts as the interface to interact with MongoDB, offering tools like schemas, models, and queries.
   - Using `mongoose`, you can define a structure for your database and perform CRUD operations.
   - It simplifies MongoDB queries with an object-oriented approach.

3. **mongoose.connect()**
   - This is a function provided by `Mongoose` to establish a connection to the MongoDB database.
   - It takes the MongoDB URI as the first argument, specifying where the database is hosted.
   - The second argument is an options object for configuring the connection (e.g., useNewUrlParser, useUnifiedTopology).
   - It returns a promise, indicating success or failure of the connection.  

4. **mongoURI**
   - This is the connection string that specifies the location of your MongoDB database.
   - It includes the protocol (mongodb://), the host (localhost or cloud URL), the port (27017), and the database name (student-management).
   - For a cloud-based `MongoDB`, the URI may also include credentials and additional parameters.
   - It tells Mongoose where to find and connect to the database.

5. **.then()**
   - This method is used to handle the promise returned by `mongoose.connect()`.
   - If the connection is successful, the callback inside `.then()` is executed.

6. **.catch()**
   - This method handles errors if the promise from `mongoose.connect()` is rejected.
   - It executes the callback inside `.catch()` to log or handle the error.


## Steps
### Step 1: Install MongoDB
**Option 1: Local Installation**

1. Download MongoDB:
    - Visit the [MongoDB Community Server](https://www.mongodb.com/try/download/community) page and download the installer for your operating system.

2. Install MongoDB:
    - Follow the installation instructions for your OS. Ensure MongoDB is added to your PATH.

3. Verify Installation:
    - Open your terminal and check the MongoDB version:
    ```bash
    mongod --version
    ```

4. Start MongoDB:
    - Start the MongoDB server on your local machine:
    ```bash
    mongod
    ```

**Option 2: Cloud-Based MongoDB (MongoDB Atlas)**
1. Create a Free Account:
    - Sign up for MongoDB Atlas at MongoDB Atlas.

2. Set Up a Cluster:
    - Create a free cluster and follow the on-screen instructions.

3. Get Your Connection String:
    - Once your cluster is created, copy the connection string for use in your project.


### Step 2: Install Mongoose
1. Open your `terminal` in your project folder.
2. Switch to the "Day-15" Branch
    - Switch to the "Day-15" branch by running the following command in the terminal
    ```bash
     git checkout Day-15
    ```

3. Install the `mongoose` library:
    ```bash
    npm install mongoose
    ```

4. Verify that `mongoose` is listed as a dependency in your `package.json` file.

### Step 3: Connect MongoDB to Your Node.js Server
1. Open your `server.js` file.
2. Import Mongoose and connect to your MongoDB instance:
   ```javascript
   // Import the mongoose library to interact with MongoDB
   const mongoose = require('mongoose');

   // Define the MongoDB connection URI
   // Replace 'localhost:27017/student-management' with your MongoDB URI (local or cloud-based)
   const mongoURI = 'mongodb://localhost:27017/student-management';

   // Connect to the MongoDB database using mongoose
   mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected...')) // If the connection is successful, log a confirmation message
      .catch(err => console.error('MongoDB connection error:', err)); // If the connection fails, log an error message with the details
   ```

### Step 4: Test the Connection
1. Start your `Node.js` server:
    ```bash
    node server.js
    ```

2. Check the `terminal` output:
    - If the connection is successful, you’ll see:
    ```arduino
    MongoDB connected...
    ```

    - If there’s an error, double-check your MongoDB server or connection string.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Set up MongoDB connection in Node.js server"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-15
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-15:main --force
    ```

# Fantastic Work! 🎉
You’ve successfully set up **MongoDB** and connected it to your Node.js server, enabling data persistence for your application. This is a massive milestone in full-stack development! Tomorrow, we’ll dive into schema creation & implementing **CRUD operations** with **MongoDB** and **Mongoose**. 🚀
