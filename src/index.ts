import express, { Request, Response } from "express";
import path from "path";
import { DatabaseConnection } from "./core/database-connection";

const app = express();

app.set("views", path.join(__dirname, "../views"));
console.log(path.join(__dirname))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const db = new DatabaseConnection();


app.get("/product/:id", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] : Array<any> = await connection!.query("SELECT * FROM products WHERE id = ?",[req.params.id]);
        res.render("product-details", rows[0]);

    }catch(err:any){
        console.log("db hata ", err.message);
    }
});

app.get("/products", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] = await connection!.query("SELECT * FROM products WHERE isActive = 1");
        res.render("products", { data: rows });

    }catch(err:any){
        console.log("db hata ", err.message);
    }

});

app.get("/", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] = await connection!.query("SELECT * FROM products  WHERE isHome = 1");
        res.render("index", { data: rows });

    }catch(err:any){
        console.log("db hata ", err.message);
    }

});

app.listen(3000, () => {
    console.log("node app listening on port 3000");
});
