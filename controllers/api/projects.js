const Project = require ("../../models/projects")

async function create(req, res){
    try {
        
        const project = await Project.create(req.body)
        console.log(req.body)
        res.json(project)

    } catch (error) {
        res.status(400).json(error)
    }
}

async function listProjects(req, res){
    const projects = await Project.find({})

    res.json(projects)

    console.log(projects)
}


async function findSingleProject(req, res){
    try {
        const {id} = req.params
        console.log("the request id",id)
        const foundProject = await Project.findById(id)
        ////res.render("pages/SingleProject", {proj: foundProject} )
        console.log(foundProject, "CONTROLLERS FOUND PROJECT")
        res.json(foundProject)
        console.log("supposed to be foundProject",foundProject)
        

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {create, listProjects, findSingleProject}