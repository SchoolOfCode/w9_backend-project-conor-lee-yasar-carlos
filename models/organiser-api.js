import weeks from '../libs/weeks-data.js';


// GET: and returns all the days for the week
export function getWeekData({userID, weekID}) {
  return weeks[`week${weekID}`];
}

// POST: add new comment to specific task by its id
export function createTaskComment({userID, weekID, day, taskID, comment}) {
  // tracks if comment was updated
  let updated = false;
  taskID = Number(taskID);

  weeks[`week${weekID}`][day - 1].list.forEach(task => {
    if (task.id === taskID) {
      task.comments = comment;
      updated = true;
    }
  });

  return { success: updated, comment: comment };
}

// PATCH: update task comment
export function updateTaskComment({userID, weekID, day, taskID, comment}) {
  // tracks if comment was updated
  let updated = false;
  taskID = Number(taskID);

  // loop through tasks to find the matching one and update
  weeks[`week${weekID}`][day - 1].list.forEach(task => {
    if (task.id === taskID) {
      task.comments = comment;
      updated = true;
    }
  });

  return { success: updated, comment: comment };
}

// PATCH: update task metadata
export function updateTaskMeta({userId, weekID, day, taskID, weekend, completed, rating}) {
  // tracks if comment was updated
  let updated = false;
  taskID = Number(taskID);
  let payload = {};

  // loop through tasks to find the matching task
  weeks[`week${weekID}`][Number(day) - 1].list.forEach(task => {
    if (task.id === taskID) {
      task.weekend = weekend;
      task.completed = completed;
      task.rating = Number(rating);
      updated = true;
      // Temporary data until we connect to the Heroku DB
      payload.weekend = weekend;
      payload.completed = completed;
      payload.rating = Number(rating);
    }
  });

  return { success: updated, payload: payload };
}

// PATCH: update task metadata
export function updateResourceMeta({userID, weekID, day, resourceID, rating}) {
  // tracks if comment was updated
  let updated = false;
  resourceID = Number(resourceID);

  // loop through tasks to find the matching task
  weeks[`week${weekID}`][Number(day) - 1].resources.forEach(resource => {
    if (resource.id === resourceID) {
      resource.rating = rating;
      updated = true;
    }
  });

  return { success: updated };
}