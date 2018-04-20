import PugMailer from 'pug-mailer';
import events from '../context/events';
import {Audit} from '../logger';

let baseUrl = '', from = null;

/**
 * Sends and email following the given email options
 *
 * @param mailOptions
 */
function sendMail(mailOptions) {
    if (from) {
        mailOptions.from = from;
    }
    Audit.info({
        message: `Attempting to send mail '${mailOptions.subject}' to ${mailOptions.to}: ${mailOptions.subject}`
    });
    return PugMailer.send(mailOptions)
        .then(() => Audit.info({
                message: `Sent '${mailOptions.subject}' to ${mailOptions.to}`
            })
        )
        .catch(err => Audit.error({
                message: `Something went wrong sending '${mailOptions.subject}' to ${mailOptions.to}: ${err}`,
                err: err,
                options: mailOptions
            })
        )
}

/**
 * Sends a welcome email to the user upon registration
 * @param user
 */
function newUser(user) {
    return sendMail({
        to: user.get('email'),
        subject: 'Welcome to Mindera OpenDay',
        template: `${process.cwd()}/src/email/templates/welcome.pug`,
        data: {
            baseUrl: baseUrl,
            user: user
        }
    });
}


export default {
    init: function (config) {
        PugMailer.init(config.smtp);
        baseUrl = config.baseUrl;
        from = config.from || null;
        events.on('insert_user', newUser);
    }
}