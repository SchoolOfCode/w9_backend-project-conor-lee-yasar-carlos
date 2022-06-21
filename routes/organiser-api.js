import express from 'express';
import {
  getWeekData,
  createTaskComment,
  updateTaskComment,
  updateTaskMeta
} from '../models/organiser-api.js';


// create this said router
const organiserRouter = express.Router();

organiserRouter.get('/:userID/:weekID', (req, res) => {
  const data = getWeekData(req.params);

  res.json({
    success: true,
    payload: data
  });
});

// listen for post requests
organiserRouter.post('/:userID/:weekID/:day/comment/:taskID', (req, res) => {
  // object with success response
  const response = createTaskComment({...req.params, ...req.body});
  
  // let the end user know the sucess of the post
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

// listen for PATCH request to update the comment for a task
organiserRouter.patch('/:userID/:weekID/:day/comment/:taskID', (req, res) => {
  const userId = req.params.userID;
  const week = req.params.weekID;
  const day = req.params.day;
  const taskId = Number(req.params.taskID);
  const comment = req.body.comment;

  // object with success response
  const response = updateTaskComment(userId, week, day, taskId, comment);

  // let the end user know the sucess of the patch
  if (response.success) {
    res.json({
      sucess: true,
      payload: 'Comment sucessfully updated'
    });
  }else{
    res.json({
      success: false,
      payload: 'Unable to update the task comment'
    });
  }
});

// listen for PATCH request to update a task metadata
organiserRouter.patch('/:userID/:weekID/:day/task/:taskID', (req, res) => {
  // object with success response
  const response = updateTaskMeta({...req.params, ...req.body})

  // let end user know the sucess of update the task meta
  if (response.success) {
    res.json({
      sucess: true,
      payload: 'Task metadata updated successfully'
    });
  }else{
    res.json({
      success: false,
      payload: 'Unable to update the task metadata'
    });
  }
});

export default organiserRouter;