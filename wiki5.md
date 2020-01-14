##Heroku Deployment (Mac OS)##

To get started with Heroku deployment with node.js, you first need to create a Heroku account and install the platform on your computer.

After Heroku is installed, use the 'heroku' command in your terminal. Use the 'heroku login' command to log into the Heroku CLI. The command will open your web browser to the Heroku login page. From there, you select log in and provide your account credentials. 

Before going further, make sure you have the prerequisites installed properly. Type 'node --version' and make sure it properly displays the current version installed on your computer. Next, type 'npm --version' and make sure the current version of that is also displayed. Finally, type in 'git --version' and make sure the current version is also displayed for that. If you do not have the most recent version of all of these, install or update to the most current versions.

To clone a version of a sample application that you can deploy to Heroku, type 'git clone https://github.com/heroku/node-js-getting-started.git' and then 'cd node-js-getting-started'

This creates a functioning github repository that has a simple application as well as a package.json file.

To deploy the app, you first need to create an app on heroku to receive your source code. You can do this by typing 'heroku create' in the terminal. When you create an app, a git remote is also created and associated with your local github repository. Heroku generates a random name or you can pass a parameter to specify your own app name. 

To deploy your code, you need to type 'git push heroku master' in your terminal. Your application is now deployed. You can open the website by typing 'heroku open' in your terminal.
