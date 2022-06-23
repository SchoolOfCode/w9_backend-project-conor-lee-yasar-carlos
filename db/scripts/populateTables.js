// import { query } from '../index.js';
import db_weeks from '../../libs/weeks-data_db.js';

// createtTasksTable();
// createResourcesTable();
// createUsersTable();
// createCommentsTable();
// createResourceUserTable();
// createTaskUserTable();
async function populateTasksTable() {
  const data = `INSER INTO tasks (task, week, day) VALUES ($1, $2, $3)`;
  for (week in db_weeks) {
    db_weeks[week].forEach((day, index) => {
      const weekNumber = index + 1;
      day.list.forEach((task, dayNumber) => {
        // await query(insert, [task.topic, weekNumber, day.day])
        console.log(task.topic, weekNumber, day.day);
      })
    })
  }
}

console.log(db_weeks)