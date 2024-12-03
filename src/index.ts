import express, { Request, Response } from "express";
import path from "path";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products/:id", (req: Request, res: Response) => {
    res.render("product-details");

});

app.use("/products", (req: Request, res: Response) => {
    res.render("product");

});

app.use("/", (req: Request, res: Response) => {
    res.render('index');

});

app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
