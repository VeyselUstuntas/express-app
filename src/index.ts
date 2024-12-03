import express, { Request, Response } from "express";
import path from "path";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const data = [
    { id: 1, name: "iphone 14", price: 30000, isActive: false },
    { id: 2, name: "iphone 15", price: 40000, isActive: true },
    { id: 3, name: "iphone 16", price: 50000, isActive: true }
];

app.get("/product/:id", (req: Request, res: Response) => {
    const product = data.find(u => u.id === Number(req.params.id));
    res.render("product-details", product);

});

app.use("/products", (req: Request, res: Response) => {
    res.render("products", { data: data });

});

app.use("/", (req: Request, res: Response) => {
    res.render('index');

});

app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
