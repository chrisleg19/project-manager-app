

const Project = (props) =>{
    const { id,title, client,targetDate} = props
    return(
        <div>
            {/* <h3>{props.id}</h3> */}
            <h1><a href={`/api/projects/${id}`}>{props.title}</a></h1>
            <h3>Client: {props.client}</h3>
            <h3>Target Date: {props.targetDate}</h3>

        </div>
    )
}

export default Project