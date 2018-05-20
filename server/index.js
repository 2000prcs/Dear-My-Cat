const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 7171;


app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
