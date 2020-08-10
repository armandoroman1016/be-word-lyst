import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import Mongoose = require("mongoose");
import { UserModel } from "../models/User";

export const auth = (passport: any) => {
    // console.log(passport);
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
        passport.use(
            new GoogleStrategy(
                {
                    clientID: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    callbackURL: "auth/google/callback",
                },
                async (
                    accessToken: any,
                    refreshToken: any,
                    profile: any,
                    done: any
                ) => {
                    console.log(profile);
                }
            )
        );

        passport.serializeUser(function (user: any, done: any) {
            done(null, user.id);
        });

        passport.deserializeUser(function (id: any, done: any) {
            UserModel.findById(id, function (err: Error, user: any) {
                done(err, user);
            });
        });
    }
};
