const express = require("express")
const router = express.Router()
const projectsCtrl = require('../../controllers/api/projects');

router.post("/", projectsCtrl.create)

router.get("/", projectsCtrl.listProjects)

router.get("/:_id", projectsCtrl.findSingleProject)

module.exports = router;