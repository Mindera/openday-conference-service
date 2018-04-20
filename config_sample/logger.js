module.exports = {
    default: {
        console: {
            colorize: 'true',
            handleExceptions: true,
            json: true,
            timestamp: true,
            level: 'debug',
            label: 'DEFAULT'
        }
    },

    audit: {
        console: {
            level: 'silly',
            colorize: 'true',
            label: 'AUDIT',
            timestamp: true,
            json: true,
            handleExceptions: true
        }
    }

};