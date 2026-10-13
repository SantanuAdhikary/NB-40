import React, { useState } from 'react'
import axios from "axios"
import { addStudent } from '../services/studentService';

const AddStudent = () => {

    const [student , setStudent ] = useState({
        sname : "",
        sid : "",
        semail : "",
        phNo : "",
        dept : ""
    })

    let {sname , sid , semail,phNo , dept} = student ;

    let handleChange = (e)=>{

        let {value , name} = e.target

        setStudent({...student, [name] : value })
    }

    let handleSubmit = async (e)=>{
        e.preventDefault();
        try{

            if(!sname || !sid || !semail || !dept || !phNo)
                return alert("fill all the input fields")
    
            console.log(student)

            await addStudent(student);
    
            alert("register done successfully")

            setStudent({
                sname : "",
                sid : "",
                semail : "",
                phNo : "",
                dept : ""
            })
        }
        catch(err)
        {
             console.log(err)
        }
    }
  return (
    <div className='addStudent'>

           <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name'value={sname} onChange={handleChange} name='sname'/>
                <input type="text" placeholder='enter your id' value={sid} onChange={handleChange} name='sid'/>
                <input type="text" placeholder='enter your email' value={semail} onChange={handleChange} name='semail'/>
                <input type="text" placeholder='enter your phone number' value={phNo} onChange={handleChange} name='phNo'/>
                <input type="text" placeholder='enter your department' value={dept} onChange={handleChange} name='dept'/>
                <button>register</button>
           </form>
    </div>
  )
}

export default AddStudent