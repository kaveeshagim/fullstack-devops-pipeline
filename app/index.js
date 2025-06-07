const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send("Hello from DevOps Pipeline!"));

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
