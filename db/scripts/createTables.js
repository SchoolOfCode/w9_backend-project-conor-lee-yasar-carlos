import {query} from '../index.js';

// keeps track of all the tasks
const createTasks = `CREATE TABLE IF NOT EXISTS tasks(
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
const createResources = `CREATE TABLE IF NOT EXISTS resources(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  resource TEXT,
  task_id INT,
  url TEXT
)`;

// query data to create table
async function createResourcesTable() {
  let data = await query(createResources);
  return data;
}

// tracks all bootcampers
const createUsers = `CREATE TABLE IF NOT EXISTS users(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name TEXT
)`;

// query data to create table
async function createUsersTable() {
  let data = await query(createUsers);
  return data;
}

// tracks all bootcampers settings for specific task
const createTaskUser = `CREATE TABLE IF NOT EXISTS taskUser(
  task_id INT,
  user_id INT,
  rating INT,
  is_weekend BOOLEAN,
  completed BOOLEAN,
  comments TEXT
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
createTaskUserTable();
