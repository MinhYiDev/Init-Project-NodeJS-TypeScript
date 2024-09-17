import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 8081;

app.get("/", (req: Request, res: Response) => {
    return res.status(200 as number).json({
        msg: "err"
    });
});

app.listen(port, (): void => {
    console.log(`Listen at PORT http://localhost:${port}`);
});
