"use client"
import Create from '@/components/Create';
import Show from '@/components/Show';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const[title,setTitle] = useState("")
  const[description,setDescription] = useState("")
  const[status,setStatus] = useState("due")
  const[task,setTask] = useState([])
  const[activetask, setactivetask] = useState(null)



  return (
      <div className="mt-5 container p-5">
        <Create 
            title = {title}
            status = {status}
            description = {description}
            activetask = {activetask}
            setDescription = {setDescription}
            setStatus = {setStatus}
            setTitle = {setTitle}
            setactivetask ={setactivetask}
            setTask = {setTask}
            task = {task}
        />
          <h2>Pending Tasks</h2>    
            <Show 
                task = {task}
                setDescription = {setDescription}
                setStatus = {setStatus}
                setTitle = {setTitle}
                setactivetask ={setactivetask}
                setTask = {setTask}
            />
      </div>
  );
};

export default page;
