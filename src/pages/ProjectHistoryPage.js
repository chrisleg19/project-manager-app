import {checkToken} from "../utilities/users-service"
import {listProjects} from "../utilities/projects-service"
//bring in useState

const ProjectHistoryPage = () =>{

const handleCheckToken = async () =>{
        
    const expDate = await checkToken()
    console.log(expDate)
}

const showProjects = async (e) =>{
    //setState with list of projects
    e.preventDefault();
    try {
        const projectsList = await listProjects()
        console.log(projectsList)
        
        
    } catch (error) {
        // console.log(error)
    }

}
//map below to display projects
//useEffect to display projects without button
    return (
        <div>
            <h1>ProjectHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>

            <button onClick={showProjects}>Show Projects</button>

        </div>
    )
}

export default ProjectHistoryPage



