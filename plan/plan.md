# Plan

The plan to create the backend.

## Endpoints

- GET
  `api/v1/<user_id>/<week_number>`

- POST
  `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

- PATCH
  _update task unique comment_
  `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`
  _update task meta_
  `api/v1/<user_id>/<week_number>/<day_number>/task/<task_id>`
  _update resource meta_
  `api/v1/<user_id>/<week_number>/<day_number>/resource/<resource_id>`

- DELETE
  `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

## Setup local libs file

`/libs/weeks-data.js` to serve dummy data to:

- populate localhost ✅
- populate heroku ✅

## Basic setup

- initiate npm ✅
- install express ✅
- install nodemo to track changes in files and reload server ✅
- setup .gitignore for npm_modules ✅
- package.json ✅
  - setup type to use esmodule ✅
  - add script to start the sercer ✅
  - add script to run dev to start server with nodemo ✅
- create app.js to handle basic requests ✅
  - import express ✅
  - create app object from express ✅
  - setup listening for port 3000 ✅
  - setup GET listener to catch request to base url '/' and respond with basic object ✅

## Create routes

- create `routes` folder ✅
  - create the `organiser-api.js` file ✅
- with app.use listen for `api/v1/` and route to `organiser-api.js` ✅
  - import router create inside the `routes/organiser-api.js` ✅
- inside `orginiser-api.js`
  - import express ✅
  - create router from express.Router ✅
  - export router for the consumption of another ✅
  - listen for GET requests with `/:userID/:weekID` ✅
  - create and return response object with userID and weekID to make sure it is working ✅
  - listen for POST request with `/:userID/:weekID/:day/comment/:taskID` ✅
  - create and return response object with all the placeholders to make sure it is working ✅
  - listen for PATCH request with `/:userID/:weekID/:day/comment/:taskID` ✅
  - create and return response object to test the results of updating the list item ✅
  - listen for PATCH request with `/:userID/:weekID/:day/task/:taskID` ✅
  - create and return response object to test the resutls of updating the task ✅
  - listen for PATCH request with `/:userID/:weekID/:day/resource/:resourceID` ✅
  - create and return response object to test the resutls of updating the resources ✅

## Create models

- create `models` folder ✅
  - create the `organiser-api.js` file ✅
    - import the libs ✅
    - write the functions to catch GET all the data for the week number ✅
    - write the function to POST the comment to the database ✅
- inside `routes/organiser-api.js` ✅
  - import the model functions ✅
  - GET model ✅
  - POST model to create new comments ✅
  - PATCH to update a task comment ✅
  - PATCH to update the task metadata ✅
  - PATCH to update the resources metadata ✅

## Prepare backend to populate heroku

- install npm package `pg` ✅
- install npm package `cors` ✅
- install npm package `dotenv` as --save-dev ✅
- Create .env file ✅
  - Add the database credentials to file
- Inside of `app.js`
  - import cors module ✅
  - add middleware to use cors on incoming request ✅
- Make sure to add the .env file the .gitignore ✅
- Create `db` folder ✅
- Inside `db` folder create `index.js` ✅
  - import pg to communication with the database ✅
  - setup the pool to communicate with database ✅
  - prepare query from pool ✅
  - export query ✅
- Create `scripts` folder
  - create `createTables.js` file
    - import query made for pool
    - prepare sql queries to create the following tables (see database-table-structure.md)
      - TaskUser
      - ResourceUser
      - Comments
      - Users
      - Resources
      - Tasks
    - add function or functions to query database with each table creation
  - create `populateTables.js` file
    - import query made for pool
    - import the libs file `weeks-data_db.js`
    - prepare sql query to populate tables
    - add function to query and populate the database
  - add scripts to `package.json`
    - "db:createTables": "npm -r dotenv/config ./db/scripts/createTables.js",
    - "db:populateTables": "npm -r dotenv/config ./db/scripts/populateTables.js"

## Update models to use SQL queries and communicate with DB

- import query setup with pool
- GET request to get all the days in said week for said user with SQL
- POST request to create task comment for said week, day and user with SQL
- PATCH request to update task comment for said week, day and user with SQL
- PATCH request to update the task metadata for said task and user with SQL
- PATCH request to update the resouces metadata for said resource and user with SQL

## STRETCH GOALS IF WE HAVE TIME

_Add DELETE and PATCH_

- listen for DELETE request with `/:userID/:weekID/:day/comment/:taskID`
- create and return response object with all the placeholders to make sure it is working
