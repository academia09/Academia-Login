module.exports = (app) => {
  const studentRegistration = require("../controllers/studentregistration.controller");

  const router = require("express").Router();

  // Use plural nouns for resource naming
  router.post("/studentregistrations", studentRegistration.studentSignUp);
  router.get("/studentregistrations", studentRegistration.findAll);
  router.delete("/studentregistrations/:id", studentRegistration.delete);
  router.delete("/studentregistrations", studentRegistration.deleteAll);
  router.put("/studentregistrations/:id", studentRegistration.update);

  // Use camelCase for function names
  router.post("/studentSignIn", studentRegistration.studentSignin);

  app.use("/api", router);
};
//hel