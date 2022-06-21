import weeks from '../libs/weeks-data.js';


// gets and returns all the days for the week
export function getWeekData({userID, weekID}) {
  return weeks[`week${weekID}`];
}

// add new comment to specific task by its id
export function createTaskComment({userId, weekID, day, taskID, comment}) {
  // tracks if comment was updated
  let updated = false;
  taskID = Number(taskID);

  weeks[`week${weekID}`][day - 1].list.forEach(task => {
    console.log(task)
    if (task.id === taskID) {
      task.comments = comment;
      updated = true;
    }
  });

  return { success: updated };
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

// update task metadata
export function updateTaskMeta({userId, weekID, day, taskID, weekend, completed, rating}) {
  // tracks if comment was updated
  let updated = false;
  taskID = Number(taskID);

  // loop through tasks to find the matching task
  weeks[`week${weekID}`][Number(day) - 1].list.forEach(task => {
    if (task.id === taskID) {
      task.weekend = weekend;
      task.completed = completed;
      task.rating = Number(rating);
      updated = true;
    }
  });

  return { success: updated };
}