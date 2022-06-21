import express from 'express';
import { getWeekData } from '../models/organiser-api.js';


// create this said router
const organiserRouter = express.Router();

organiserRouter.get('/:userID/weeks/:weekID', (req, res) => {
  const userID = req.params.userID;
  const weekID = req.params.weekID;
  const data = getWeekData(userID, weekID);

  res.json({
    success: true,
    payload: data
  });
});

// listen for post requests
organiserRouter.post('/:userID/weeks/:weekID/:day/:taskID', (req, res) => {
  const userID = req.params.userID;
  const weekID = req.params.weekID;
  const taskID = req.params.taskID;
  const dayID = req.params.day;

  res.json({
    success: true,
    payload: `Add a comment to week ${weekID} day ${dayID} from user ${userID} to task ${taskID}`
  })
});

export default organiserRouter;