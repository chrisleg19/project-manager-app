import * as projectsAPI from "./projects-api"

export async function create(projectData){
    const project = await projectsAPI.create(projectData)
    return project
}