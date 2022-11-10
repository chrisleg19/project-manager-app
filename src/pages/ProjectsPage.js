import {checkToken} from "../utilities/users-service"
import {listProjects} from "../utilities/projects-service"
//bring in useState
import {useState, useEffect} from "react"

import Project from "../components/Project"

const ProjectsPage = () =>{

const handleCheckToken = async () =>{
        
    const expDate = await checkToken()
    console.log(expDate)
}

const [projects, setProjects] = useState([])

// useEffect(()=>{
//     const projectsList = listProjects()
//         console.log(projectsList)
// },[])


//useEffect to display projects without button
useEffect(()=>{
    showProjects()
},[])

const showProjects = async () =>{
    // const res = await listProjects()
    // const projectsList = await res.json()
    // setProjects(...projectsList)
    
    const projectsList = await listProjects()
    setProjects([...projectsList])
    console.log(projectsList)
    
}

console.log("state",projects)

  
// const showProjects = async (e) =>{
//     //setState with list of projects
//     e.preventDefault();
//     try {
//         const projectsList = await listProjects()
//         console.log(projectsList)
//         setProjects(...projectsList)
//         return projects
        
//     } catch (error) {
//         // console.log(error)
//     }
// }

//map below to display projects

const display = projects.map((project,idx)=>{
    const date = new Date(project.targetDate)
    return(

        
        <div key = {project._id}>
            {/* <h2 >
            <a href={`/api/projects/${project._id}`}>{project.title}</a>
            </h2>
            
            <h3 >
            Client: {project.client}
            </h3>
            
            <h3 >
            Target Date: {date.toDateString()}
            </h3> */}

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
            <button onClick={handleCheckToken}>Check When My Login Expires</button>

            {/* <button onClick={showProjects}>Show Projects</button> */}

            <div>
               {display}

            </div>
            

        </div>
    )
}

export default ProjectsPage



