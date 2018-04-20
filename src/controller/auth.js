import express from 'express';
import passport from 'passport';
import isLoggedIn from '../context/isLoggedIn';

let router = express.Router();


/**
 * Initialize the Local Authentication process
 */
router.post('/auth/login', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err || !user) {
            res.status(401).send({status: 'ERROR', message: err});
        } else {
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.send({status: 'SUCCESS', message: 'LOGIN_SUCCEEDED'});
            });
        }
    })(req, res, next);
});


/**
 * Logs the current user out
 */
router.get('/auth/logout', isLoggedIn, function (req, res) {
    req.logout();
    res.send({});
});



export default function () {
    return router;
};
