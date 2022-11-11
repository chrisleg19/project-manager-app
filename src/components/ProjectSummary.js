import {useState, useEffect} from "react"


const ProjectSummary = (props) =>{
    const {id, title, client, budget, targetDate, deliverables, constraints} = props
    

    return(
        <div>
            <h1>Title: {props.title}</h1>
            <h3>Client:{props.client}</h3>
            <h3>Budget:{props.budget}</h3>
            <h3>Target Date:{props.targetDate}</h3>
            {/* <h3>Deliverables:</h3>
            <h3>Constraints:</h3> */}

        </div>
    )
}

export default ProjectSummary




// const Project = (props) =>{
//     const [projectState, setProjectState] = useState()
//     const { state, id,title, client,targetDate} = props
//     console.log(state)
//     return(
//         <div>
//             {/* <h3>{props.id}</h3> */}
//             <h1><a href={`/api/projects/${id}`}>{props.title}</a></h1>
//             <h3>Client: {props.client}</h3>
//             <h3>Target Date: {props.targetDate}</h3>

//         </div>
//     )
// }

// export default Project