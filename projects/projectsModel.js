const db = require('../data/dbConfig.js');

module.exports = {
    addProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject

}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
        .where({
            id
        })
}


function updateProject(id, project) {
    return db('projects')
        .where({
            id
        })
        .update(project);
}

function deleteProject(id) {
    return db('projects')
        .where({
            id
        })
        .del();
}