import css from "@/components/Create.module.css"
const Create = (props) => {

    const {
        setactivetask,
        task,
        title,
        description,
        status,
        activetask,
        setDescription,
        setStatus,
        setTitle,
        setTask
    }= props


    const submiteHandler = (e) =>{
        e.preventDefault()
  
      if(title.length < 5 || description.length < 20){
          toast.error(
              "Title should contain more than 5 characters and Description should contain more than 20 characters"
          )
          return;
      }
  
        const newtask= {
          Date: new Date().toLocaleDateString(),
          title,description,status
        }
  
        setTask([...task,newtask])
  
        setTitle("")
        setDescription("")
        setStatus("due")
    }
  
  
    const updateTask = (e)=> {
          e.preventDefault()
  
          const copytasks = [...task];
          copytasks[activetask] = {
              ...copytasks[activetask],
              title,description,status
          }
          localStorage.setItem(
            "users",
            JSON.stringify([...copytasks[activetask], title,description,status])
        );
          setTask(copytasks)
          setDescription("")
          setTitle("")
          setStatus("due")
          setactivetask(null)
    }


  return (
    <div>
<form className="w-100">
              <h2>Create Your Tasks</h2>
              <input
                  onChange={(e)=> {setTitle(e.target.value)}}
                  value={title}
                  className="form-control mb-3"
                  type="text"
                  placeholder="Title"
              />
              <textarea
                  onChange={(e)=>{setDescription(e.target.value)}}
                  value={description}
                  className="form-control mb-3"
                  placeholder="description here..."
              ></textarea>
              <select 
              onChange={(e)=>{setStatus(e.target.value)}}
              value={status}
              className="form-control mb-3">
                  <option value="due">Due</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
              </select>
              {activetask == null ? (
                  <button onClick={submiteHandler} className="btn btn-primary">Create Task</button>
              ): (
              <button onClick={updateTask} className="btn btn-primary">Update Task</button>
              )}
              <hr />
          </form>

    </div>
  )
}

export default Create