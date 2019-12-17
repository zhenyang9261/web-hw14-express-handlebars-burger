# Eat-Da-Burger Node.js Express Handlebars App

## About this app

This is a Node app that demonstrates CRUD operations in MVC framework.

**C**reate: Enter a burger you want to eat in the text field and click Submit.

**R**ead: All burgers show in the page with not devoured burgers in the left and devoured in the right column.

**U**pdate: Click Devour button will change the state of the burger from devoured false to true.

**D**elete: Click Delete button will delete a devoured burger.

## How to set up the app and run in your local computer

1. Clone this github repository to your local computer.
2. Enter the app folder, and type "npm install". This will install necessary node packages.
3. You will need a local mySql server to run this app. Open up your local mySql Workbench and run the sql scripts provided in the db folder. Run schema.sql to create tables, then run seeds.sql to insert seed rows in the tables.
4. In the local folder, create a file .env and put your database user and password in the file in the following format:

   DB_USER=your-user-name

   DB_PWD=your-password

5. Run: node server.js

## Heroku Deployment

https://burgers-express-handlebars.herokuapp.com/
