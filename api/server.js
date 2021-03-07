const http = require("http");
const contact = require("./contact");
const auth = require("./authenticate");

const server = http.createServer((req, res) => {
  const route = req.url.split('?')[0];

  switch (route) {
    case "/contact":
      return contact(req, res);

    case "/auth":
      return auth(req, res);

    case "/":
      res.writeHead(200);
      return res.end("Hello world!");

    default:
      res.writeHead(404);
      return res.end("Not Found");
  }
});

const PORT = 2222;

server.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
