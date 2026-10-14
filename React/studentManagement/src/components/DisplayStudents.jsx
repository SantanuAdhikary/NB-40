import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteStudent, getStudents } from '../services/studentService'
import { useNavigate } from 'react-router-dom'

const DisplayStudents = () => {

  let [students,setStudents] = useState([])

  const navigate = useNavigate();
  let fethStudents = async()=>{

    try{
         let data = await getStudents()
         setStudents(data)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
   fethStudents()
  },[])

  let handleEdit =(id)=>{

    // console.log(id)

    navigate(`/edit/${id}`)

  }


  let handleDelete =async (id)=>{
       try{
            await deleteStudent(id)
            let data = await getStudents()
            setStudents(data)
       }
       catch(err)
       {
           console.log(err)
       }
  }

  return (
    <div className='displayStudents'>
         <h1> Student Details</h1>

         <table>

           <thead>

            <tr>
                <th>sid</th>
                <th>name</th>
                <th>email</th>
                <th>dept</th>
                <th>phNo</th>
                <th>update</th>
                <th>delete</th>

            </tr>
          
           </thead>

           <tbody>
               {
                students.map((student)=>{
                   return <tr key={student.id}>
                       <td>{student.sid}</td>
                       <td>{student.sname}</td>
                       <td>{student.semail}</td>
                       <td>{student.dept}</td>
                       <td>{student.phNo}</td>
                       <td><button onClick={()=>handleEdit(student.id)}>edit</button></td>
                       <td><button onClick={()=> handleDelete(student.id)}>delete</button></td>
                   </tr>
                })
               }
           </tbody>
         </table>
    </div>
  )
}

export default DisplayStudents