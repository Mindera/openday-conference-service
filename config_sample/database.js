module.exports = {
    'client': 'mysql',
    'debug': true,
    'pool': {
        'min': 3,
        'max': 20
    },
    'connection': {
        'port': 3306,
        'user': 'root',
        'password': process.env.ENV == 'PROD' ? '' : '', // what an hack?!
        'database': 'database',
        'socketPath': process.env.ENV == 'PROD' ? '/cloudsql/instance:database' : ''
    },
    'acquireConnectionTimeout': 2000,
    'timezone': 'UTC'
};