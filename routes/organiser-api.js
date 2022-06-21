import express from 'express';

// create this said router
const organiserRouter = express.Router();

organiserRouter.get('/:userID/weeks/:weekID', (req, res) => {
  const userID = req.params.userID;
  const weekID = req.params.weekID;

  res.json({
    success: true,
    payload: `Get the week ${weekID} data for student ${userID}`
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