import {query} from '../index.js';
import db_weeks from '../../libs/weeks-data_db.js';


// populate the base table with the tasks
function populateTasksTable() {
  const data = `INSERT INTO tasks (task, week, day) VALUES ($1, $2, $3)`;
  for (const week in db_weeks) {
    const weekNumber = Number(week.slice(4));
    db_weeks[week].forEach((day, index) => {
      day.list.forEach(async task => {
        await query(data, [task.topic, weekNumber, day.day]);
      })
    })
  }
}

// populate the resources table
function populateResourcesTable() {
  const data = `INSERT INTO resources (resource, task_id, url) VALUES ($1, $2, $3)`;
  for (const week in db_weeks) {
    const weekNumber = Number(week.slice(4));
    db_weeks[week].forEach((day, index) => {
      day.resources.forEach(async resource => {
        await query(data, [resource.topic, resource.taskId, resource.url]);
      })
    })
  }
}

// create table with one user for now
async function populateUsersTable() {
  const users = ['Lee', 'Yasar', 'Conor', 'Carlos'];
  const data = `INSERT INTO users (user_name) VALUES ($1)`;
  for (let i = 0; i < users.length; i++ ){
    await query(data, [users[i]]);
  }
}

// call the functions to populate tables
populateTasksTable();
populateResourcesTable();
populateUsersTable();