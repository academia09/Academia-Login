const express = require("express");
const cors = require("cors");

const app = express();

// React na localhost sathe connect krva mate
const corsOptions = {
  origin: "*",
};

// Server ne mongoose sathe connect krva mate
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes mathi app import kravyu (route import)
const routes = [
  require("./routes/facultyregistration.routes"),
  require("./routes/studentregistration.routes"),
];

// Register routes
routes.forEach((route) => {
  route(app);
});

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to academia application." });
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
