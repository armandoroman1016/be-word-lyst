import { Router, Request, Response } from "express";
import passport from "passport";

export const router = Router();

router.get("/login", (req: Request, res: Response) => {
    res.render("login", { layout: "login" });
});

router.get("/logout", (req: Request, res: Response) => {
    res.send("logging out");
});

// auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => res.redirect("/dashboard")
);
