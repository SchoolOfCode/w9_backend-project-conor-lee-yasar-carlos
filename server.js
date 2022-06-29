import app from "./app.js";

// Separated the listening part so I can use the app.js for testing
const PORT = process.env.port || 3000;

// listening to requests on port 3000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
