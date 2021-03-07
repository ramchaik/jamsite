module.exports = (req, res) => {
  let body = "";
  req.on("data", (data) => (body += data));

  req.on("end", () => {
    console.log(body);

    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("success");
    return;
  });
};

