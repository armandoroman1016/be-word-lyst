import express, { Response, Request } from "express";
import { router as authRoutes } from "./routes/auth-routes";
import * as dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const app: express.Application = express();

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.get("/", (req: Request, res: Response) => {
    res.render("home");
});

app.use("/auth", authRoutes);
app.listen(PORT, () =>
    console.log(
        `*** Server running in ${process.env.NODE_ENV} on port ${PORT} ***`
    )
);
