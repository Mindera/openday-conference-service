module.exports = {
    url: 'jdbc:mysql://localhost:3306/',
    schemas: 'dbname',
    locations: 'filesystem:sql/migrations',
    user: 'INSERT_USER',
    password: 'INSERT_PASSWORD',
    sqlMigrationSuffix: '.sql'
};
