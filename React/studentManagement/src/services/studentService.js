import api from "../api/api"


export const getStudents = async ()=>{

    try{
         let res =   await api.get("/students")
         return res.data;
    }
    catch(err)
    {
        console.log(err)
    }
}


export const addStudent = async(payload)=>{
    try{
         let res  =   await api.post("/students",payload)
         return res.data;
    }
    catch(err)
    {
        console.log(err)
    }
}


export const deleteStudent = async (id)=>{
    try{
       let res = await api.delete(`/students/${id}`)
       return res.data
    }
    catch(err)
    {
         console.log(err)
    }
}