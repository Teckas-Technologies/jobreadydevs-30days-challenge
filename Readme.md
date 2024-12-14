# Day 25: Deployment on Render

Welcome to Day 25 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll take your app live by deploying it on **Render**. Deployment allows users to access your app via the internet, making it accessible and professional.

## Expected Output 
At the end of **Day 25**, you will have knowledge of **deployment**, **production ready code** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day25.png)  

## Objectives
1. Deploy the application live using **Render**.
2. Ensure the deployed app is fully functional and accessible.
3. Test the live app and resolve any deployment-specific issues.

## Steps
### Step 1: Prepare Your App for Deployment
1. Switch to the "Day-25" Branch
    - Switch to the "Day-25" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-25
    ```

2. Ensure your app is production-ready:
    - Remove any hardcoded development configurations.
    - Use environment variables for sensitive data (e.g., database URI).

3. Add a start script in your `package.json`:
    - This allows you to run your server using the npm start command.
    ```json
    "scripts": {
        "start": "node server.js"
    }
    ```

4. Install `dotenv` to manage environment variables:
    - dotenv lets you keep sensitive information like API keys outside of your code.
    ```bash
    npm install dotenv
    ```

5. In your `server.js` (or entry point file), require dotenv at the top:
    - This loads the environment variables defined in your .env file.
    ```javascript
    require('dotenv').config();
    ```

6. Add your MongoDB URI in a `.env` file in the root of your project:
    - Store your MongoDB connection string securely in the .env file.
    ```bash
    MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.tqn82ch.mongodb.net/job-ready-devs?retryWrites=true&w=majority&appName=Cluster0"
    ```

7. Update your `server.js` MongoDB connection code to use the environment variable:
    - This ensures your app connects to the database using the URI from the `.env` file, with a fallback to a local database.
    ```javascript
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/student-management'
    ```

### Step 2: Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Code is ready for deployment"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-25
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-25:main --force
    ```

### Step 3: Deploy Your App on Render
1. Go to [Render](https://render.com/) and sign up or log in.
2. Click **New + → Web Service**.
3. Connect your GitHub repository.
4. Select your repository and click Connect.
5. Configure your app:
    - **Branch**: main
    - **Build Command**: npm install
    - **Start Command**: npm start
6. Add your MongoDB URI in Environment Variables:
    ```makefile
    KEY: MONGODB_URI  
    VALUE: <your-mongodb-uri>
    ```

7. Click Create Web Service to deploy.


### Step 4: Access Your Deployed App
Once the deployment is complete, Render provides a URL for your live app, like:
    ```arduino
    https://<your-app-name>.onrender.com
    ```

### Step 5: Test the Deployed App
1. Test all features on the live app:
    - CRUD operations.
    - User authentication (if applicable).
    - Error handling and validation.
    - Responsiveness and design.

2. Verify database connectivity (for full-stack apps) or API integrations.

### Step 6: Resolve Deployment-Specific Issues
1. Check logs for errors:
    - In the Render dashboard, go to your service’s Logs section to view deployment and runtime logs.
2. Fix identified issues and redeploy if necessary.

## Your Assignment Task:
Share the deployed site URL in the comments in the [Telegram channel](https://t.me/jobreadydevs).

---

# Congratulations! 🎉
You’ve successfully deployed your application live! This is a major milestone, showcasing your ability to build and deliver a full-stack project. Prepare for final reflections and portfolio building tomorrow!