# CS 326 - Echo Secure - Team 26

Echo-Secure


Description

Echo-Secure is a user-friendly tool designed to help individuals organize their tasks and manage deadlines efficiently.

Project Structure

For milestone 2, the relevant work lies within the /src/client and src/public directory. Within this directory, you'll find all the key components of our website's functionality. These components are within specific folders, each corresponding to a function of our application:

1. Login: Handles the functionality related to user authentication and login.
2. CreateAcc: Manages the process of user account creation.
3. Homepage: Contains our objective, and team info.
4. Dashboard: Users can add their tasks and view important dates in this interface.
5. Task Detail: Handles the display and management of individual task details.

In milestone 3, good amount of effort have been made within the /src/server directory of the application. User authentication has been successfully implemented, ensuring secure access, and the system adeptly manages multiple users. It loads individualized sets of previously added tasks for each user, contributing to a more personalized and efficient user experience.

Important routes

/checkexit: retrieve user credential data from the database to the frontend.

/getTasks: retrieve user tasks data from database to the frontend.

/submit: sent user credential data to the server and save it in the database.

/addTasks: sent task details data to the server and save it in the database.

Installation
1. Git clone to repository to your local machine
2. Navigate to the project directory
3. Run "npm install" on the terminal to install all dependencies
4. Start the program using "npm start"

Usage

Account creation: User will be create an account using the create account link in the login page. Upon successful registration, users are redirected to the login page to log in to their newly created account. 

Home Page: Once the user log in to the website, the user be directed to the home page where they see the info about this project, our objective and the team information. 


Dash Board: By clicking the "continue to dashboard' button. User will be directed to the dashboard page. The dashboard page presents users with a calendar view, providing an organized overview of their tasks and deadlines. Within this page, user can create a task by clicking the "add task button" on the top left of the website. This will allow the user to create an task with name, due date and description. Concurrently, this task will show up on the calendar. 

Task Detail: When user click on this task they will be take to the task detail page, where they can get more information about this task. Also they will be able to edit and categorize this task. 




