import express, { Response, Request } from "express";
import { router as authRoutes } from "./routes/auth-routes";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
import exphbs = require("express-handlebars");
import path = require("path");

dotenv.config();

connectDB();

const app: express.Application = express();

const PORT = process.env.PORT || 5000;

app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: "./views/layouts",
    })
);
app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req: Request, res: Response) => {
    res.render("login");
});

app.use("/auth", authRoutes);

app.listen(PORT, () =>
    console.log(
        `*** Server running in ${process.env.NODE_ENV} on port ${PORT} ***`
    )
);
