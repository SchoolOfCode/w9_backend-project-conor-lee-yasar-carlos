import express from 'express';
import organiserRouter from './routes/organiser-api.js'


const PORT = process.env.port || 3000;
const app = express();


app.get('/', (req, res) => {
  res.json({
    success: 'true',
    payload: 'Test route running'
  });
});

// redirect to our api
app.use('/api/v1', organiserRouter);

// listening to requests on port 3000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});