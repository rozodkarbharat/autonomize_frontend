import React, { useState } from 'react'

const UserNameForm = ({handleSubmit}) => {
      const [username, setusername] = useState("rozodkarbharat")
    
    function handleForm(e){
        e.preventDefault();
        handleSubmit(username)
    }
  return (
    <div>
       <form onSubmit={handleForm}>
        <input onChange={(e)=>setusername(e.target.value)} value={username} type="text" placeholder='github username' className=""/>
        <input type="submit" className=""/>
      </form>
    </div>
  )
}

export default UserNameForm
