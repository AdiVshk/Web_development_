const express = require('express');
const app = express();
app.use(express.json());
app.listen(4000, () => {
  console.log(`app is listening on port 4000`);
});



