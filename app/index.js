const express = require("express");
const client = require("prom-client");
const app = express();
const port = 3000;

// default metrics
client.collectDefaultMetrics();

app.get("/", (_, res) => res.send("Hello from DevOps Pipeline!"));

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
