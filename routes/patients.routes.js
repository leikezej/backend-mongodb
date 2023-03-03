const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/patients.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // CREATE NEW PATIENT
  app.get("/create", [authJwt.verifyToken, authJwt.isModerator], controller.create)

  // GET ALL PATIENT LIST
  app.get("/patients", [authJwt.verifyToken, authJwt.isAdmin],
   controller.getPatients)

  // GET PATIENT
  app.get("/singlePatient/:id", [authJwt.verifyToken, authJwt.isModerator], controller.getOne)

  // UPDATE PATIENT
  app.put("/updatePatient/:id", [authJwt.verifyToken, authJwt.isModerator], controller.updateOne)

  // DELETE PATIENT
  app.delete("/deletePatient/:id", [authJwt.verifyToken, authJwt.isAdmin],  controller.deleteOne)
};
