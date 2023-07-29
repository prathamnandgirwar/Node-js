# NodeJS Project
For this project, we'll use Express.js to build a straightforward Node.js web application, containerize it with Docker, and set up continuous integration (CI) with GitHub Actions. When updates are pushed to the repository, the CI pipeline will instantly build and test the application.
create a new repository in your github account
create "app.js" file and write simple web application code of "Hi This is NodeJS Devops Project"
We launch a EC2 instance of t2.micro in AWS.
In Security group allow SSH, HTTPS HTTP and Custom TCP of 3000 which is default port for nodejs
login in MoboXterm using pem file
commands to use
--sudo su (switch to root user)
--yum update (update the machine)
--yum install npm (installing Node Package Manager )
--git clone https://github.com/your-username/repo_name.git
--cd repo_name
--npm init (intiatialise NodeJS project)
-- npm install express.js (Installing ExpressJS)
-- node app.js (Test the application)
go to browser and put "public ip:3000" and you should see the msg "Hi This is NodeJS Devops Project"
Now, Create 'Dockerfile" and write the dockerfile to 
       1. extract nodejs image from hub
       2. set working directory
       3. Install dependencies
       4. Expose the 3000 port
       5. Start the application
Now build the docker container localling using following command
--docker build -t NodeJS Project .
--docker run -p 3000:3000 NodeJS Project
Again, open your web browser and navigate to "publicIP:3000" to check if the containerized application is running correctly
Commit and push all the changes to your GitHub repository:
--git add .
--git commit -m "Initial commit: Created the DevOps project"
--git push origin main
Now, let's set up GitHub Actions to enable continuous integration (CI). Create a new file named .github/workflows/ci.yml in your project's repository and wirte YAML script to push and build the project
Commit and push the .github/workflows/ci.yml file to trigger the CI workflow:
--git add .github/workflows/ci.yml
--git commit -m "Set up GitHub Actions for CI"
--git push origin main
GitHub Actions will automatically execute the workflow defined in ci.yml, build the Docker container, and run the tests.

