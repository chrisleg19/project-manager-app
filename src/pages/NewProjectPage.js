import {create} from "../utilities/projects-service"
import {useState} from "react"


const NewProjectPage = () =>{
    const [formData, setFormData] = useState({
        title: "",
        client: "",
        budget: "",
        targetDate: "",
        deliverables: [],
        constraints: [],
        error: ""
    })

    const[deliverables1, setDeliverables1] = useState("")
    const[deliverables2, setDeliverables2] = useState("")
    const[constraints1, setConstraints1] = useState("")
    const[constraints2, setConstraints2] = useState("")

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            
            const project = {
                title: formData.title,
                client: formData.client,
                budget: formData.budget,
                targetDate: formData.targetDate,
                deliverables: [deliverables1, deliverables2] ,
                constraints:[constraints1, constraints2]
            }
            console.log(project)
            const projectData = await create(project)

            console.log(projectData)
            
        } catch (error) {
            setFormData({error: "Creation Failed - Try Again"})
        }
    }

    return (
        <div>
            <h1>NewProjectPage</h1>

            <form autoComplete="off" onSubmit={handleSubmit}>

            <label>Title</label>
            <input type="text" name="title" value={formData.value} onChange={handleChange} required />

            <label>Client</label>
            <input type="text" name="client" value={formData.value} onChange={handleChange} required />

            <label>Budget</label>
            <input type="text" name="budget" value={formData.value} onChange={handleChange} required />

            <label>Target Date</label>
            <input type="text" name="targetDate" value={formData.value} onChange={handleChange} required />

            <label>Deliverables</label>
            <input type="text" name="deliverables1" value={deliverables1} onChange={(e)=>setDeliverables1(e.target.value)}  />
            <br/>
            <input type="text" name="deliverables2" value={deliverables2} onChange={(e)=>setDeliverables2(e.target.value)}  />

            <label>Constraints</label>
            <input type="text" name="" value={constraints1} onChange={(e)=>setConstraints1(e.target.value)}  />
            <br/>
            <input type="text" name="" value={constraints2} onChange={(e)=>setConstraints2(e.target.value)}  />

            <button type="submit">Create Project</button>



                
            </form>




        </div>
    )
}

export default NewProjectPage