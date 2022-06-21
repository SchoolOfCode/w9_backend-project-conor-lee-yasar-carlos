import express from 'express';
import {
  getWeekData,
  createTaskComment,
} from '../models/organiser-api.js';


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
  const userId = req.params.userID;
  const week = req.params.weekID;
  const taskId = Number(req.params.taskID);
  const day = req.params.day;
  const comment = req.body.comment;

  const response = createTaskComment(userId, week, day, taskId, comment);
  
  if (response.success) {
    res.json({
      success: true,
      payload: 'Comments successfully added'
    });
  }else{
    res.json({
      success: false,
      payload: 'Task not found, unable to add comment'
    });
  }

});

export default organiserRouter;