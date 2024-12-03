import express from "express";
import path from "path";
import router from "./routes/route";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(router);


app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
