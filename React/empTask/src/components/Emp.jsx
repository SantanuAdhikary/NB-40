import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Emp = () => {

    let [ename , setEname] = useState("")
    let [eid , setEid] = useState("")
    let [dept , setDept] = useState("")
    let [sal,setSal] = useState("")
    let [editId,setEditId] = useState(null)

    let [employees,setEmployees] = useState([])

    let handleSubmit =(e)=>{
        e.preventDefault();

        if(!ename || !eid || !dept || !sal)
            return toast.error("fill all the input fields",{
                  autoClose : 800
            });

        let newEmp = {
            ename : ename ,
            eid : eid , 
            dept : dept,
            sal : sal
        }

        setEmployees([...employees, newEmp])

        setEid("")
        setEname("")
        setDept("")
        setSal("")

       toast.success("new emp added",{
        autoClose: 800
       })
    }

    let handleDelete = (id)=>{

        console.log(id)


        let newEmps = employees.filter((emp)=> emp.eid != id)

        console.log(newEmps)
        setEmployees(newEmps)

        toast.success("emp is deleted",{
            autoClose:800
        })
    }

    let handleEdit = (id)=>{
        setEditId(id)
    }
  return (
    <main>

        <div className="left">

            <h1>Emp Task</h1>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enter emp name' value={ename} onChange={(e)=>setEname(e.target.value)}/>
                <input type="text" placeholder='enter emp id' value={eid} onChange={(e)=>setEid(e.target.value)}/>
                <input type="text" placeholder='enter emp dept' value={dept} onChange={(e)=>setDept(e.target.value)} />
                <input type="text" placeholder='enter emp salary' value={sal} onChange={(e)=>setSal(e.target.value)} />
                 <button> {editId ? "update" : "submit"}</button>
            </form>

        </div>
        <div className="right">

             <table>

                <thead>

                    <tr>
                        <th>eid</th>
                        <th>ename</th>
                        <th>sal</th>
                        <th>dept</th>
                        <th>delete</th>
                        <th>edit</th>
                    </tr>
                </thead>

                <tbody>
                     {
                        employees.map((emp)=>{
                            return <tr key={emp.eid}>
                                <td>{emp.eid}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.sal}</td>
                                <td>{emp.dept}</td>
                                <td><button onClick={()=>handleDelete(emp.eid)}>delete</button></td>
                                 <td><button onClick={()=>handleEdit(emp.eid)}>edit</button></td>
                                
                            </tr>
                        })
                     }
                </tbody>

             </table>
        </div>

    </main>
  )
}

export default Emp