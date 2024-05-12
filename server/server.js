const express = require("express");
const app = express();
const port = 3000;

app.get("/api/users", (req, res) => {
  res.send({ a: 1, b: 2 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
