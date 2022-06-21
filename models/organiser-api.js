import weeks from '../libs/weeks-data.js';


// gets and returns all the days for the week
export function getWeekData(userId, week) {
  return weeks[`week${week}`];
}

// add new comment to specific task by its id
export function createTaskComment(userId, week, day, taskId, comment) {
  // tracks if comment was updated
  let updated = false;

  weeks[`week${week}`][day - 1].list.forEach(item => {
    if (item.id === taskId) {
      item.comments = comment;
      updated = true;
    }
  });

  return updated === true ? { success: true } : { success: false };
}

// update task comment
export function updateTaskComment(userId, week, day, taskId, comment) {
  // tracks if comment was updated
  let updated = false;

  // loop through tasks to find the matching one and update
  weeks[`week${week}`][day - 1].list.forEach(item => {
    if (item.id === taskId) {
      item.comments = comment;
      updated = true;
    }
  });

  return updated === true ? { success: true } : { success: false };
}