import express, { Request, Response } from "express";
import path from "path";
const app = express();

app.set("views", path.join(__dirname, "../views"));
console.log(path.join(__dirname))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const data = [
    { id: 1, name: "iphone 14", price: 30000, isActive: false, isHome: false, image: "1.jpg" },
    { id: 2, name: "iphone 15", price: 40000, isActive: true, isHome: true, image: "2.jpg" },
    { id: 3, name: "iphone 16", price: 50000, isActive: true, isHome: false, image: "3.jpg" }
];

app.get("/product/:id", (req: Request, res: Response) => {
    const product = data.find(u => u.id === Number(req.params.id));
    res.render("product-details", product);

});

app.use("/products", (req: Request, res: Response) => {
    res.render("products", { data: data });

});

app.use("/", (req: Request, res: Response) => {
    res.render('index',{ data: data });

});

app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
