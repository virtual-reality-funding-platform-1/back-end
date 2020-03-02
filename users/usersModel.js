const db = require('../data/dbConfig.js');

module.exports = {
    addUser,
    getUserById,
    findBy

}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
}

function getUserById(id) {
    return db('users')
        .where({
            id
        })
}

function findBy(filter) {
    console.log(filter);
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);

}