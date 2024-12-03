import { DatabaseConnection } from "../core/database-connection";
import express, { Request, Response } from "express";
const db = new DatabaseConnection();
const router = express.Router();

router.get("/product/:id", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] : Array<any> = await connection!.query("SELECT * FROM products WHERE id = ?",[req.params.id]);
        res.render("product-details", rows[0]);

    }catch(err:any){
        console.log("db hata ", err.message);
    }
});

router.get("/products", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] = await connection!.query("SELECT * FROM products WHERE isActive = 1");
        res.render("products", { data: rows });

    }catch(err:any){
        console.log("db hata ", err.message);
    }

});

router.get("/", async(req: Request, res: Response) => {

    try{
        const connection = await db.getConnection();
        const [rows] = await connection!.query("SELECT * FROM products  WHERE isHome = 1");
        res.render("index", { data: rows });

    }catch(err:any){
        console.log("db hata ", err.message);
    }

});

export default router;