import express, {Response, Request, NextFunction} from "express"

const app : express.Application = express()

const add = (a : number, b : number):number => a + b

app.get("/", (req : Request, res: Response) => res.send("hello"))

app.listen(5000, () => console.log("*** Server running on port 5000 ***"))