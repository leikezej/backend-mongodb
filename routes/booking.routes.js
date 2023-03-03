const controller = require("../controllers/booking.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/booking/create", controller.create);

  app.get("/booking/findAll", controller.findAll);

  app.get("/booking/:id", controller.findOne);

  app.put("/booking/:id", controller.update);

  app.delete("/booking/:id", controller.delete);

  app.get("/booking/published", controller.findAllPublished);

};



