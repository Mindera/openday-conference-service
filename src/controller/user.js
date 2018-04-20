import express from 'express';
import passport from 'passport';
import User from '../model/user';

import isLoggedIn from '../context/isLoggedIn';


let router = express.Router();


/**
 * Registers the user in our database and automatically logs the user in.
 *
 */
router.post('/user', function (req, res, next) {

	let email = req.body.email;
	let firstName = req.body.first_name;
	let lastName = req.body.last_name;
	let password = req.body.password;
	let twitterUsername = req.body.twitterUsername;
	let telegramUsername = req.body.telegramUsername;

	if (!firstName || !email || !password) {
		res.status(400).send({status: 'ERROR', message: 'INCOMPLETE_REGISTRATION_DETAILS'});
	} else {
        User.where('email', email).fetch().then((user) => {
                if (user) {
                    res.status(409).send({status: 'ERROR', message: 'EMAIL_ALREADY_REGISTERED'});
                } else {

                    let user = new User();
                    user.set('email', email);
                    user.set('password', password);
                    user.set('first_name', firstName);
                    user.set('last_name', lastName);
                    user.set('telegram_handle', telegramUsername);
                    user.set('twitter_handle', twitterUsername);
                    user.save(null).then(() => {
                        passport.authenticate('local')(req, res, function () {
                            res.status(201).send({status: 'SUCCESS', message: 'USER_CREATED'});
                        });
                    });
                }
            }).catch(next);
	}
});

/**
 * Return the current logged in user details
 */
router.get('/user', isLoggedIn, function (req, res) {
	res.send({
		email: req.user.get('email'),
		firstName: req.user.get('first_name'),
		lastName: req.user.get('last_name'),
		twitterUsername: req.user.get('twitter_handle'),
		telegramUsername: req.user.get('telegram_handle')
	});
});



export default function () {
	return router;
};
