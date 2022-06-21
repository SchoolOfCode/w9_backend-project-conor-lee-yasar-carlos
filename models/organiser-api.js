import { weeks } from '../libs/weeks-data.js';

export function getWeekData(userId, weekNumber) {
  return weeks[`week${weekNumber}`];
}
