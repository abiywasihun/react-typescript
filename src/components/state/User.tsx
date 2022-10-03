import { useState } from "react"
type AuthUser={
    name:string,
    email:string,
}
export const User=()=>{
    const [user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:'abiy',
            email:'abiy@gmail.com'
        })
    }
    // const handleLogout=()=>{
    //     setUser(null)
    // }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}