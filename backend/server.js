const express = require("express");
const path = require("path");

const app = express();

const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/services");
const noticeRoutes = require("./routes/notice");
const eventRoutes = require("./routes/event");
const authRoutes = require("./routes/auth");

// Middleware
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);
app.use("/services", serviceRoutes);
app.use("/notice", noticeRoutes);
app.use("/events", eventRoutes);
app.use("/", authRoutes);
app.use("/", homeRoutes);

// Test route
app.get("/test", (req, res) => {
  res.send("Test route works!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running : http://localhost:${PORT}`);
  console.log(
    "Routes loaded: /about, /contact, /services, /notice, /events, /login, /register, /",
  );
});
