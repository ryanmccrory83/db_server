const database = require('./databaseConnection.js')

const getAll = () => {
    return database('cat_types').select()
}

module.exports = {
    getAll
}