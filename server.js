//1. npm init -y
//2. npm i json-server
//3. create server.js
//4. copy the template to server.js
//5. node server.js



const PORT = process.env.PORT || 5000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);


//1. base url (http://localhost:5000/)
//2. end point (/api/todo)
//3. query params 