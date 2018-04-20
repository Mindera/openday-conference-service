import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'cookie-session';
import passport from 'passport';
import passportConfiguration from './passportConfiguration';
import mailer from './email/mailer';
import cors from 'cors';
import {Audit} from './logger';


// initialize the mailer
mailer.init(require('../.config/mail.js'));

// initialize the express server
const app = express();

// configure port
const port = process.env.PORT || 8989;

// disable express default headers
app.disable('x-powered-by');

// enable cors
// TODO: Configure whitelist
let whitelist = require('../.config/auth.js').whitelist;
function corsOptionsDelegate(req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {origin: true, credentials: true};
    } else {
        corsOptions = {origin: false};
    }
    callback(null, corsOptions);
}
app.use(cors(corsOptionsDelegate));

// attach cookie parser
app.use(cookieParser());

// attache body parser
app.use(bodyParser.json());

// attach session handling
app.use(session(require('../.config/session.js')));

// load configurations into passport
passportConfiguration(passport);

// initialize passport
app.use(passport.initialize());

// initialize passport session
app.use(passport.session());

app.use('/api', require('./controller/auth').default());
app.use('/api', require('./controller/user').default());
app.use('/api', require('./controller/openday').default());

// setup healthcheck
app.get(`/api/health`, function respond(req, res, next) {
    res.send({status: 'UP'});
});

// dummy endpoint for the rest api root
app.use('/', function (req, res) {
    res.send();
});

app.use('*', function (req, res) {
    res.status(404).send();
});

// global error handler
app.use(function (err, req, res, next) {
    console.log(err);
    Audit.error({
        message: 'Error processing request',
        err: err.toString()
    });
    res.status(500).send({
        status: 'ERROR',
        message: 'UNKNOWN_SERVER_ERROR'
    });
    next();
});

// start accepting connections
app.listen(port);
Audit.info({
    message: 'API now Listening on ' + port
});
