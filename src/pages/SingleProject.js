import Project from "../components/Project"
import {findSingleProject} from "../utilities/projects-service"
import {useState, useEffect} from "react"


const SingleProject = (props)=>{
    // const {id,title,client,targetDate } = props
    const [project, setProject] = useState({})
    
    useEffect(()=>{
        showProject()
    },[])

    const showProject = async () =>{
        const individualProject = await findSingleProject()
        console.log(individualProject)
        setProject(individualProject)
    }

    console.log(project)



    // const date = new Date(project.targetDate)
    
    return(
        <div>
                <h1>Single Project</h1>
                 {/* <h2>{project.title}</h2> */}
                {/*<h2>{project.client}</h2>
                <h2>{date.toDateString()}</h2> */}
                
                {/* <h3>{project.deliverables.map((deliverable,idx)=>{
                    return(
                        <div>
                            <p>{deliverable.name}</p>
                        </div>
                    )
                })}</h3> */}
                
             
            
        </div>


    )
}

export default SingleProject