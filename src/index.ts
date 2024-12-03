import express, { Request, Response } from "express";
import path from "path";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const data = [
    { id: 1, name: "iphone 14", price: 30000 },
    { id: 2, name: "iphone 15", price: 40000 },
    { id: 3, name: "iphone 16", price: 50000 }
];

app.get("/products/:id", (req: Request, res: Response) => {
    res.render("product-details");

});

app.use("/products", (req: Request, res: Response) => {
    res.render("products",{data:data});

});

app.use("/", (req: Request, res: Response) => {
    res.render('index');

});

app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
