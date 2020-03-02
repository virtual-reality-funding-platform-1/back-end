const router = require('express').Router();
const projectdb = require('./projectsModel.js');


router.post("/", (req, res) => {
    projectdb
        .addProject(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to post the project!"
            });
        });
});

router.get("/", (req, res) => {
    projectdb
        .getProjects()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find projects!"
            });
        });
});

router.get("/:id", (req, res) => {
    projectdb
        .getProjectById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "No projects with matching ID!"
            });
        });
});

router.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;

    projectdb.deleteProject(id)
        .then(deleted => {
            if (deleted) {
                res.status(204).end();
            } else {
                res.status(404).json({
                    success: false,
                    message: 'The user with the specified ID does not exist.'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'The user could not be removed.',
                err
            })
        });
});

router.put('/:id', (req, res) => {
    const {
        id
    } = req.params;

    const changes = req.body;

    projectdb.updateProject(id, changes)
        .then(updated => {
            if (updated) {
                res.status(200).json({
                    success: true,
                    updated
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'The project with the specified ID does not exist.'
                });
            }
        })

        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'The project information could not be modified.',
                err
            })
        });
});

module.exports = router;