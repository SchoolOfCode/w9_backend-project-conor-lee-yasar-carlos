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

export default organiserRouter;