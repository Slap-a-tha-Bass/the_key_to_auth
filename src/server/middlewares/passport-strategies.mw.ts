import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import { Application } from 'express';
import { Payload } from '../../../types';
import db_users from '../db/queries/users';
import { compareHash } from '../utils/passwords';
import { jwtConfig } from '../config/users';

export function configurePassport(app: Application) {
    passport.serializeUser((user: Payload, done) => {
        if (user.password) {
            delete user.password;
        }
        done(null, user);
    });
    passport.deserializeUser((user, done) => done(null, user));

    passport.use(new PassportLocal.Strategy({
        usernameField: 'email',
        session: false
    }, async (email, password, done) => {
        try {
            const [userFound] = await db_users.find('email', email);
            if (userFound && compareHash(password, userFound.password)) {
                done(null, userFound);
            } else {
                done(null, false);
            }
        } catch (error) {
            done(error);
        }
    }));

    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtConfig.secret
    }, (payload: Payload, done) => {
        try {
            done(null, payload);
        } catch (error) {
            done(error);
        }
    }))

    app.use(passport.initialize());

}
