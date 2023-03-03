const controller = require("../controllers/booking.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/booking/create", controller.create);

  app.get("/api/booking/findAll", controller.findAll);

  app.get("/api/booking/:id", controller.findOne);

  app.put("/api/booking/:id", controller.update);

  app.delete("/api/booking/:id", controller.delete);

  app.get("/api/booking/published", controller.findAllPublished);

};



