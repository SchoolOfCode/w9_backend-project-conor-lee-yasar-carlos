# Plan

The plan to create the backend.

## Endpoints

- GET
  `api/v1/<user-id>/weeks/<week-id>`

- POST
  `api/v1/<user-id>/weeks/<week-id>/<day>/<task-id>`

- PATCH
  `api/v1/<user-id>/weeks/<week-id>/<day>`

- DELETE
  `api/v1/<user-id>/weeks/<week-id>/<day>/<task-id>`

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
  - listen for GET requests with `/:userID/weeks/:weekID` ✅
  - create and return response object with userID and weekID to make sure it is working ✅
  - listen for POST request with `/:userID/weeks/:weekID/:day/:taskID`
  - create and return response object with all the placeholders to make sure it is working

**_STRETCH GOALS IF WE HAVE TIME_**

- listen for PATCH request with `/:userID/weeks/:weekID/:day`
- create and return response object with all the placeholders to make sure it is working
- listen for DELETE request with `/:userID/weeks/:weekID/:day/:taskID`
- create and return response object with all the placeholders to make sure it is working

## Create models

- create `models` folder
  - create the `organiser-api.js` file
  - write the functions to catch GET, POST, PATCH and DELETE to return a dummy payload for testing
- inside `routes/organiser-api.js`
  - import the model functions
  - inside the listeners call the models and the reponse objects payload to test
