import React, { useEffect, useState } from 'react'

const Users = () => {

    let [users , setUsers] = useState([])

    let fetchUser = async()=>{
        try{
             let res = await fetch("https://api.github.com/users")
             let data = await res.json()
             console.log(data)
             setUsers(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>{
             fetchUser()
    },[])

  return (
    <div>

          {

            users.length > 0 ?
               users.map((user)=>{
                  return <div key={user.id}>
                      <p>{user.login}</p>
                  </div>
               })

               : <h1> no user found </h1>
          }
    </div>
  )
}

export default Users