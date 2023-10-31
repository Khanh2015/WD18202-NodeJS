const http = require("http");

const server = http.createServer((request, response) => {
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(JSON.stringify({ data: "Hello World" }));
  response.writeHead(200);
  response.end(/*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Day 01</title>
    </head>
    <body>
        <h1>Welcome to NodeJs day 01</h1>
    </body>
    </html>
    `);
});

server.listen(8000, () => {
  console.log("Server is running");
});
