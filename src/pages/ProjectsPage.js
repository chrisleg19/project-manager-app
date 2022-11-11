
import {listProjects} from "../utilities/projects-service"
import {useState, useEffect} from "react"
import Project from "../components/Project"

const ProjectsPage = () =>{


const [projects, setProjects] = useState([])


useEffect(()=>{
    showProjects()
},[])


const showProjects = async () =>{
    const projectsList = await listProjects()
    setProjects([...projectsList])
    console.log(projectsList)
    
}
console.log("state",projects)


const display = projects.map((project,idx)=>{
    const date = new Date(project.targetDate)
    return(

        <div key = {project._id}>

            <Project
                id={project._id}
                title={project.title}
                client={project.client}
                targetDate={date.toDateString()}
            />

        </div>
    )
})


    return (
        <div>
            <h1>Projects Page</h1>         

            {display}

        </div>
    )
}

export default ProjectsPage



