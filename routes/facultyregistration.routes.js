module.exports = (app) => {
  const facultyRegistration = require("../controllers/facultyregistration.controller");

  const router = require("express").Router();

  // Use plural nouns for resource naming
  router.post("/facultyregistrations", facultyRegistration.facultySignUp);
  router.get("/facultyregistrations", facultyRegistration.findAll);
  router.delete("/facultyregistrations/:id", facultyRegistration.delete);
  router.delete("/facultyregistrations", facultyRegistration.deleteAll);
  router.put("/facultyregistrations/:id", facultyRegistration.update);

  // Use a consistent route name for sign-in
  router.post("/facultysignin", facultyRegistration.facultySignin);

  app.use("/api", router);
};
