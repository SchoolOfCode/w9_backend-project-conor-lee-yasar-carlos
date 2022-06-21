import weeks from '../libs/weeks-data.js';


// const courseWeeks = weeks;

export function getWeekData(userId, week) {
  return weeks[`week${week}`];
}

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