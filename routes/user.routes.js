const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/findAll", [authJwt.verifyToken, authJwt.isAdmin], controller.findAll);

  app.get("/api/user/getUser/:id", [authJwt.verifyToken], controller.getUserById);

  app.put("/api/user/update/:id", [authJwt.verifyToken, verifySignUp.checkDuplicateFullnameOrEmail], controller.updateById);

  app.delete("/api/user/delete/:id", [authJwt.verifyToken, verifySignUp.checkRolesExisted], controller.deleteById);


  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/patient",
    [authJwt.verifyToken],
    controller.patientBoard
  );

  app.get(
    "/api/test/moderator",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

};































  // app.get("/test/all", controller.allAccess);

  // app.get("/test/user", [authJwt.verifyToken], controller.userBoard);

  // app.get(
  //   "/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );