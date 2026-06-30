const express = require("express");
const path = require("path");

const app = express();

// Static Files
app.use(express.static(path.join(__dirname, "../frontend")));

// Import Routes
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Use Routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);

// Server Start
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});