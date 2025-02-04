const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is your DevOps project!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://3.111.188.169:${port}`);
});
