exports.send = (res, { cors = false }) => (statusCode, msg) => {
  const headers = {};

  if (cors) {
    // ! Allow CORS domains
    headers["Access-Control-Allow-Origin"] = "*";
  }

  res.writeHead(statusCode, headers);
  return res.end(msg);
};
