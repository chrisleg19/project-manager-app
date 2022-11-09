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

    const[deliverables, setDeliverables] = useState([])

    const addDeliverable = (event) =>{
        event.preventDefault();
        setDeliverables([...deliverables, deliverable])
        setDeliverable({
            deliverableName: "",
            deliverableBody: "",
            estimatedCost: "",
            actualCost: "",
            estimatedTime: "",
            actualTime: "",
    })
    }

    const[deliverable, setDeliverable] = useState({
        deliverableName: "",
        deliverableBody: "",
        estimatedCost: "",
        actualCost: "",
        estimatedTime: "",
        actualTime: "",
})

// const[deliverable2, setDeliverable2] = useState({
//     deliverable2Name: "",
//     deliverable2Body: "",
//     estimated2Cost: "",
//     actual2Cost: "",
//     estimated2Time: "",
//     actual2Time: "",
// })


    const[constraint, setConstraint] = useState({
        constraintName: "",
        constraintBody: "",
        showStopper: false
    })

    // const[constraint2, setConstraint2] = useState({
    //     constraint2Name: "",
    //     constraint2Body: "",
    //     showStopper2: false
    // })

    // const[showDeliverable, setShowDeliverable]=useState(true)

    // const[newDeliverable, setNewDeliverable]= useState(false)

    // const[deliverables1, setDeliverables1] = useState("")
    // const[deliverables2, setDeliverables2] = useState("")
    // const[constraints1, setConstraints1] = useState("")
    // const[constraints2, setConstraints2] = useState("")

    // const handleChange = (event)=>{
        
        
    //     // setDeliverable2({...deliverable2, [event.target.name]: event.target.value})
        
    //     // setConstraint2({...constraint2, [event.target.name]: event.target.value})
    // }

    const handleFormChange =(event)=>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleDeliverableChange =(event)=>{
        setDeliverable({...deliverable, [event.target.name]: event.target.value})
    }

    const handleConstraintChange =(event)=>{
        setConstraint({...constraint, [event.target.name]: event.target.value})
    }




       

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            
            const project = {
                title: formData.title,
                client: formData.client,
                budget: formData.budget,
                targetDate: formData.targetDate,
                deliverables: deliverables,
                constraints: [constraint]
                // deliverables: [deliverables1, deliverables2] ,
                // constraints:[constraints1, constraints2]
            }
            // console.log(project)
            const projectData = await create(project)

            console.log(projectData)
            
        } catch (error) {
            setFormData({error: "Creation Failed - Try Again"})
        }
    }

    //function for new deliverable.

    // const anotherDeliverable = () =>{
    //     setNewDeliverable(newDeliverable===true)


    // }



    return (
        <div>
            <h1>NewProjectPage</h1>

            <form autoComplete="off" onSubmit={handleSubmit}>

            <label>Title</label>
            <input type="text" name="title" value={formData.value} onChange={handleFormChange} required />

            <label>Client</label>
            <input type="text" name="client" value={formData.value} onChange={handleFormChange} required />

            <label>Budget</label>
            <input type="text" name="budget" value={formData.value} onChange={handleFormChange} required />

            <label>Target Date</label>
            <input type="text" name="targetDate" value={formData.value} onChange={handleFormChange} required />

            <button type="submit">Create Project</button>



                
            </form>

<form onSubmit={addDeliverable}>

           <label>Deliverable 1 Name:</label>
            <input type="text" name="deliverableName" value={deliverable.deliverableName} onChange={handleDeliverableChange}  />

            <label>Deliverable 1 Body:</label>
            <input type="text" name="deliverableBody" value={deliverable.deliverableBody} onChange={handleDeliverableChange}  />

            <label>Deliverable 1 Estimated Cost:</label>
            <input type="text" name="estimatedCost" value={deliverable.estimatedCost} onChange={handleDeliverableChange}  />

            <label>Deliverable 1 Actual Cost:</label>
            <input type="text" name="actualCost" value={deliverable.actualCost} onChange={handleDeliverableChange}  />

            <label>Deliverable 1 Estimated Time:</label>
            <input type="text" name="estimatedTime" value={deliverable.estimatedTime} onChange={handleDeliverableChange}  />

            <label>Deliverable 1 Actual Time:</label>
            <input type="text" name="actualTime" value={deliverable.actualTime} onChange={handleDeliverableChange}  />

        <button>Add Deliverable</button>

            </form>

            {/* {showDeliverable ? null: 
            (<><label>Deliverable 2 Name</label>
            <input type="text" name="deliverable2Name" value={deliverable2.deliverable2Name} onChange={handleChange}  />
            
            <label>Deliverable 2 Body:</label>
            <input type="text" name="deliverable2Body" value={deliverable2.deliverable2Body} onChange={handleChange}  />

            <label>Deliverable 2 Estimated Cost:</label>
            <input type="text" name="estimated2Cost" value={deliverable2.estimated2Cost} onChange={handleChange}  />

            <label>Deliverable 2 Actual Cost:</label>
            <input type="text" name="actual2Cost" value={deliverable2.actual2Cost} onChange={handleChange}  />

            <label>Deliverable 2 Estimated Time:</label>
            <input type="text" name="estimated2Time" value={deliverable2.estimated2Time} onChange={handleChange}  />

            <label>Deliverable 2 Actual Time:</label>
            <input type="text" name="actual2Time" value={deliverable2.actual2Time} onChange={handleChange}  />
            </>)
            }

            <br/>
            <button onClick={(e)=>{e.preventDefault(); setShowDeliverable(!showDeliverable)}}>New Deliverable</button>
            <br/> */}

            
            <form>

            <label>Constraint 1 Name:</label>
            <input type="text" name="constraintName" value={constraint.constraintName} onChange={handleConstraintChange}  />

            <label>Constraint 1 Body:</label>
            <input type="text" name="constraintBody" value={constraint.constraintBody} onChange={handleConstraintChange}  />

            <label>Constraint 1 Show Stopper:</label>
            <input type="checkbox" name="showStopper" value={constraint.showStopper} onChange={handleConstraintChange}  />

            <button>Add Constraint</button>
            </form>

            {/* <label>Deliverables</label>
            <input type="text" name="deliverables1" value={deliverables1} onChange={(e)=>setDeliverables1(e.target.value)}  />
            <br/>
            <input type="text" name="deliverables2" value={deliverables2} onChange={(e)=>setDeliverables2(e.target.value)}  />

            <label>Constraints</label>
            <input type="text" name="" value={constraints1} onChange={(e)=>setConstraints1(e.target.value)}  />
            <br/>
            <input type="text" name="" value={constraints2} onChange={(e)=>setConstraints2(e.target.value)}  /> */}






        </div>
    )
}

export default NewProjectPage