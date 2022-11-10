import * as projectsAPI from "./projects-api"

export async function create(projectData){
    const project = await projectsAPI.create(projectData)
    return project
}

export async function listProjects(){
    const listOfProjects = await projectsAPI.listProjects()
    return listOfProjects
}

export async function findSingleProject(){
    const foundProject = await projectsAPI.findSingleProject()
    console.log(foundProject, "FoundProject HERE")
    return foundProject
}