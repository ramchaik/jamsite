const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => (body += data));

    req.on("end", () => {
      console.log(body);

      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end("success");
    });
  }
});

const PORT = 2222;
server.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
