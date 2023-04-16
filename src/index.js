import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import serveStatic from "serve-static";
import morgan from "morgan";
//import { create } from "express-handlebars";
//const hbs = create({});
import { engine } from "express-handlebars";


const app = express();
const port = 3000;

//app.use(morgan("combined"));
console.log("dirname:", __dirname);
app.use(express.static(path.join(__dirname, "resource/public")));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/resource/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
