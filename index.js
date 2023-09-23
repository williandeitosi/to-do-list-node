const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");
require("dotenv").config();

connectToDb();
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`));
