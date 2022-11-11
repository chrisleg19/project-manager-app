
import {listProjects} from "../utilities/projects-service"
import {useState, useEffect} from "react"
import ProjectSummary from "../components/ProjectSummary"
import ProjectDetails from "../components/ProjectDetails"

const ProjectsPage = () =>{


const [projects, setProjects] = useState([])


useEffect(()=>{
    showProjects()
},[])


const showProjects = async () =>{
    const projectsList = await listProjects()
    setProjects([...projectsList])
    // console.log(projectsList)
    
}
console.log("state",projects)



const [selectedProject, setSelectedProject] = useState({})

const display = projects.map((project,idx)=>{
    
    const date = new Date(project.targetDate)

//  const passingState = ()=>{
//     setSelectedProject(projects.filter(p=>p._id===project._id))
//     console.log(selectedProject)
//  }
    
    return(

        <div key = {project._id}>

            <ProjectSummary
                id={project._id}
                title={project.title}
                client={project.client}
                budget={project.budget}
                targetDate={date.toDateString()}
                deliverables={project.deliverables}
                constraints={project.constraints}
                
            />
            
           <a href={`/projects/${project._id}`}> <button onClick={(e)=>{
                setSelectedProject(projects.filter(p=>p._id===project._id))
                e.preventDefault()
                }} >Select Project</button></a>

                {/* <ProjectDetails /> */}

        </div>
    )
    
})

console.log(selectedProject)

    return (
        <div>
            <h1>Projects Page</h1>         

            {display}

        </div>
    )
}

export default ProjectsPage



