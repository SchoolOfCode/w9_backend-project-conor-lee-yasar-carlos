import express from 'express';


const PORT = process.env.port || 3000;
const app = express();


app.get('/', (req, res) => {
  res.json({
    success: 'true',
    payload: 'Test route running'
  });
});


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});