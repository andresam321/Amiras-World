// inside of user.routes.js
const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = (app) => {
  app.post("/api/user/register", Users.register);
  app.post("/api/user/login", Users.logIn);
  app.post("/api/user/logout", Users.logout);
  app.get("/api/currentUser", Users.getLoggedInUser)
  app.get("/api/allUsers", Users.getUsers)
  // this route now has to be authenticated
//   app.get("/api/users", authenticate, Users.getAll);
}

