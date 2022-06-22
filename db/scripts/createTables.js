import {query} from '../index.js';

// keeps track of all the tasks
const createtTasks = `CREATE TABLE IF NOT EXIST tasks(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  task TEXT,
  week INT,
  day INT
)`;

// query data to create table
async function createtTasksTable() {
  let data = await query(createTasks);
  return data;
}

// tracks all resources
const createResources = `CREATE TABLE IF NOT EXIST resources(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  resource TEXT,
  task_id INT
)`;

// query data to create table
async function createResourcesTable() {
  let data = await query(createResources);
  return data;
}

// tracks all bootcampers
const createUsers = `CREATE TABLE IF NOT EXIST users(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user TEXT
)`;

// query data to create table
async function createUsersTable() {
  let data = await query(createUsers);
  return data;
}

// tracks all bootcampers comments for a specific task
const createComments = `CREATE TABLE IF NOT EXIST comments(
  task_id INT,
  user_id INT,
  comment TEXT
)`;

// query data to create table
async function createCommentsTable() {
  let data = await query(createComments);
  return data;
}

// tracks all bootcampers feedback on specific resource
const createResourceUser = `CREATE TABLE IF NOT EXIST resourceUser(
  resource_id INT,
  user_id INT,
  rating BOOLEAN
)`;

// query data to create table
async function createResourceUserTable() {
  let data = await query(createResourceUser);
  return data;
}

// tracks all bootcampers settings for specific task
const createTaskUser = `CREATE TABLE IF NOT EXIST tastUser(
  task_id INT,
  user_id INT,
  rating INT,
  is_weekend BOOLEAN,
  completed BOOLEAN
)`;

// query data to create table
async function createTaskUserTable() {
  let data = await query(createTaskUser);
  return data;
}

// call all functions to start creation of tables
createtTasksTable();
createResourcesTable();
createUsersTable();
createCommentsTable();
createResourceUserTable();
createTaskUserTable();
