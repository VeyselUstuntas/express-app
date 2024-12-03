import express, { Request, Response } from "express";
const app = express();

app.use("/", (req: Request, res: Response) => {
    res.send("Home Page");      

});

app.listen(3000, () => {
    console.log("node server listening on port 3000");
});