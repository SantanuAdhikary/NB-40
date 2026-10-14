import React, { useEffect, useState } from 'react'
import axios from "axios"
import { addStudent, getStudentById, updateStudent } from '../services/studentService';
import { useParams } from 'react-router-dom';

const EditStudent = () => {

    const [student , setStudent ] = useState({
        sname : "",
        sid : "",
        semail : "",
        phNo : "",
        dept : ""
    })

    let {sname , sid , semail,phNo , dept} = student ;

    const {id} = useParams()

    let fetchStudent =async()=>{

       try{
           let data =   await getStudentById(id)
           setStudent(data)

       }
       catch(err)
       {
        console.log(err)
       }
    }

    useEffect(()=>{
      fetchStudent()
    },[])

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

            await updateStudent(id,student);
    
            alert("update done successfully")

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
                <button>update</button>
           </form>
    </div>
  )
}

export default EditStudent