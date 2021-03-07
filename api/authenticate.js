const { parseQuery } = require("./utils/parseQuery");
const { send } = require("./utils/sendResponse");

module.exports = (req, res) => {
  const sendRes = send(res, { cors: true });
  const query = req.url.includes("?") ? parseQuery(req.url) : {};
  const { username, password } = query;

  if (username === "user1" && password === "nosecret") {
    return sendRes(200, "auth data");
  }

  sendRes(401, "Incorrect username or password!");
};
