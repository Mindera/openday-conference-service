import LocalStrategy from 'passport-local';
import User from './model/user';
import {Audit} from './logger';
const configAuth = require('../.config/auth');


/**
 * General Passport configuration
 *
 * @param passport
 */
export default function (passport) {

    /**
     * Serialize the user information into the session
     */
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    /**
     * Desserialize current user information from the session
     */
    passport.deserializeUser(function (id, done) {
        User.where({id: id}).fetch().then((user) => {
            done(null, user);
        }).catch((err) => {
            done(err);
        });
    });

    /**
     * Login using local authentication
     */
    passport.use(new LocalStrategy(configAuth.localAuth,
        function (req, email, password, done) {

            User.where('email', email)
                .fetch()
                .then(user => {
                    if (!user) {
                        done('USER_NOT_FOUND');
                    } else {
                        user.verifyPassword(password).then((correct) => {
                            if (correct) {
                                done(null, user);
                            } else {
                                done('INVALID_CREDENTIALS');
                            }
                        }).catch((err) => {
                            done(err);
                        })
                    }
                })
                .catch((err) => {
                    Audit.error({
                        msg: 'Exception when logging in user',
                        err: err
                    });
                    done(err);
                })
        }
    ));

}
