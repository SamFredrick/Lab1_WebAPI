const server = require("http").createServer();

server.on("request", (request, response) => {
  if (request.method !== "POST" || request.url !== "/echo") {
    response.statusCode = 404;
    return response.end();
  }

  var body = [];

  request.on("data", chunk => {
    body.push(chunk);
  });

  request.on("end", () => {
    let bodyString = body.concat().toString();
    response.statusCode = 200;
    response.end(bodyString);
  });

  request.on("error", () => {
    response.statusCode = 400;
    response.end();
  });
});

server.listen(process.env.PORT || 8008, () => {
  console.log("Server listening");
});

module.exports = server;
