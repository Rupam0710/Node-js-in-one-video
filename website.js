const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>About Rupam Pal</h1><p> Hey this is the about his life</p>");
  } else if (req.url == "/home") {
    res.statusCode = 200;
    res.end(
      "<h1>This is Rupam Pal</h1><p> Hey this is the way to rock the world</p>"
    );
  } else {
    res.statusCode = 404;
    res.end(
      "<h1>Not found</h1><p> Hey this page is not found on the server</p>"
    );
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
