import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Todo = () => {

    let [items , setItems] = useState([])
    let [item,setItem] = useState("")
    let [editIndex,setEditIndex] = useState(null)


    let handleClick =()=>{

        item = item.trim()
        if(items.includes(item))
        {
            return toast.warning("item already present in list",{
                autoClose:800
            })

        }

        if(item==="")
          return toast.warning("please enter some value",{
        autoClose: 800
    })

        if(editIndex == null)
        {

            setItems( [...items,item])
            toast.success("item added successfully",{
                autoClose:800
            })
        }
        else{

            let newItems = [...items];
            newItems[editIndex] = item;
            setItems(newItems);
            setEditIndex(null)
             toast.success("item updated successfully",{
                autoClose:800
            })
           
        }

        setItem("")
    }

    let handleDelete = (index)=>{
        console.log(index)

        let newItems = items.filter((ele,ind)=> ind!=index)
        setItems(newItems)
        toast.info("item deleted successfully",{
            autoClose: 800
        })
    }

    let handleEdit = (index)=>{

        console.log(index)
        setEditIndex(index)
        setItem(items[index])
    }
  return (
    <div className='outer'>

        <h1>todo App</h1>
        <header>
            <input type="text" 
                placeholder='enter your todo' 
                value={item}
                onChange={(e)=>setItem(e.target.value)}
            />

            <button onClick={handleClick}>
                 {editIndex==null ? "add" : "update"}
            </button>
        </header>

        <main>
             {
                items.length > 0 ?

                items.map((ele,index)=>{
                    return <li key={index}>
                         {ele}

                         <button onClick={()=>handleEdit(index)}>edit</button>
                         <button onClick={()=>handleDelete(index)}>delete</button>
                         
                          </li>
                })

                : <h3> no items found</h3>
             }
        </main>

    </div>
  )
}

export default Todo