const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// serve static HTML file
app.use(express.static(path.join(__dirname, '../client')));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Express global error handler caught unknown middleware error: ${err}`,
    status: 400,
    message: { err: `An error occurred` }
  };
  console.log(defaultErr, err);
  const errorObj = Object.assign(defaultErr, err);
  console.log(JSON.stringify(errorObj.log));
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

// starts server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

module.exports = app;