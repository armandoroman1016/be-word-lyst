import { Router, Request, Response } from "express";

export const router = Router();

router.get("/login", (req: Request, res: Response) => {
    res.render("login", { layout: "login" });
});

router.get("/logout", (req: Request, res: Response) => {
    res.send("logging out");
});

// auth with google
router.get("/google", (req: Request, res: Response) => {
    // handle with passport
    res.send("login with google");
});
