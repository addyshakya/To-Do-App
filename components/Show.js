
const Show = (props) => {

    const{
        task,
        setDescription,
        setStatus,
        setTitle,
        setactivetask,
        setTask
    } = props

    const updatehandler = (index) =>{
        const {title,description,status} = task[index];
        setDescription(description)
        setTitle(title)
        setStatus(status)
        setactivetask(index)
      }
    
      
  const deletehandler = (index) => {
    setTask(task.filter((t,i) => i !== index));
  }

    let tasklist = <h3>Loading...</h3>
    if (task.length > 0) { 
        tasklist = task.map((task, index) => {
            return(
                <div className="card  mb-3 me-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        {task.status}
                    </h6>
                    <p className="card-text">
                        {task.description}
                    </p>
                    <button onClick={() => updatehandler(index)} className="me-2 btn btn-sm btn-dark">
                        Update Task
                    </button>
                    <button onClick={() => deletehandler(index)} class="btn btn-sm btn-outline-primary">
                        Delete Task
                    </button>
                    
                </div>
            </div>
            )
        }) 
        
    }


  return (
    <div className="d-flex flex-wrap">{tasklist}</div>
  )
}

export default Show