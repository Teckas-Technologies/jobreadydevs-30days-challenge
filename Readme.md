# Day 25: Deployment on Heroku or GitHub Pages

Welcome to Day 25 of the Job-Ready Devs 30-Day Challenge! Today, you’ll take your app live by deploying it on Heroku or GitHub Pages. Deployment allows users to access your app via the internet, making it accessible and professional.

## Objectives
1. Deploy the application live using Heroku (for full-stack apps) or GitHub Pages (for frontend-only apps).
2. Ensure the deployed app is fully functional and accessible.
3. Test the live app and resolve any deployment-specific issues.

---

## Steps

### Step 1: Choose a Deployment Platform
- **Heroku**: For full-stack apps with a Node.js backend.
- **GitHub Pages**: For frontend-only apps.

---

### Deployment on Heroku (Full-Stack Apps)

#### Step 1.1: Prepare Your App for Deployment
1. Ensure your app is production-ready:
   - Remove any hardcoded development configurations.
   - Use environment variables for sensitive data (e.g., database URI).
2. Add a `start` script in your `package.json`:
    ```json
    "scripts": {
        "start": "node server.js"
    }
    ```

#### Step 1.2: Install the Heroku CLI
1. Download and install the Heroku CLI.
2. Log in to Heroku:
    ```bash
    heroku login
    ```

#### Step 1.3: Create a Heroku App
1. Create a new Heroku app:
    ```bash
    heroku create
    ```

#### Step 1.4: Add Environment Variables
1. Set up your MongoDB URI in Heroku:
    ```bash
    heroku config:set MONGO_URI=<your-mongodb-uri>
    ```

#### Step 1.5: Deploy Your App
1. Push your code to Heroku:
    ```bash
    git push heroku main
    ```

2. Open your app in a browser:
    ```bash
    heroku open
    ```

### Deployment on GitHub Pages (Frontend-Only Apps)
#### Step 2.1: Prepare Your Frontend for Deployment
1. Ensure all files (index.html, styles.css, script.js) are updated and functional.  

#### Step 2.2: Deploy to GitHub Pages
1. Enable GitHub Pages in your repository:
- Go to your repository’s Settings on GitHub.
- Under the Pages section, select the branch to deploy (e.g., main) and click Save.

2. Access your app:
- Your app will be live at:
`https://<your-username>.github.io/<repository-name>/`

### Step 3: Test the Deployed App
1. Test all features on the live app:
- CRUD operations.
- User authentication (if applicable).
- Error handling and validation.
- Responsiveness and design.

2. Verify database connectivity (for Heroku) or API integrations (for frontend-only apps).

### Step 4: Resolve Deployment-Specific Issues
1. Check logs for errors:
- **Heroku**: Use the following command to view logs:
    ```bash
    heroku logs --tail
    ```

- **GitHub Pages**: Check the browser console for errors (e.g., missing files or incorrect paths).

2. Fix any identified issues and redeploy if necessary.

## Your Assignment Task:
- Share the deployed site URL in the comments in the [Telegram channel](https://t.me/jobreadydevs).

---

# Congratulations! 🎉
You’ve successfully deployed your application live! This is a major milestone, showcasing your ability to build and deliver a `full-stack` project. Prepare for final reflections and portfolio building tomorrow!


