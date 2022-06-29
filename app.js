import express from 'express';
import cors from 'cors';
import organiserRouter from './routes/organiser-api.js'


const app = express();

// filter the response stream
app.use(express.json());
// cors will allow communication with the frontend
app.use(cors());

// default route will just return success response so we know its working
app.get('/', (req, res) => {
  res.json({
    success: 'true',
    payload: 'Test route running'
  });
});

// redirect to our api
app.use('/api/v1', organiserRouter);

export default app;