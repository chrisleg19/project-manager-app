import {checkToken} from "../utilities/users-service"

const ProjectHistoryPage = () =>{

const handleCheckToken = async () =>{
        
    const expDate = await checkToken()
    console.log(expDate)
}

    return (
        <div>
            <h1>ProjectHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>

        </div>
    )
}

export default ProjectHistoryPage



