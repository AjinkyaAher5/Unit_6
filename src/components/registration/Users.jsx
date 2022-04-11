import { useEffect, useState } from "react"

export const Users=()=>{

const [user,setUser]=useState([])

useEffect(()=>{
    fetch(`http://localhost:8000/users`)
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((err)=>console.log(err))
},[])




return(
    <div>
        <table style={{border:"1px solid black"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>NAME</th>
                    <th style={{border:"1px solid black"}}>AGE</th>
                    <th style={{border:"1px solid black"}}>DATE OF BIRTHX</th>
                    <th style={{border:"1px solid black"}}>STATE OF ADDRESS</th>
                    <th style={{border:"1px solid black"}}>ADDRESS</th>
                    <th style={{border:"1px solid black"}}>PINCODE</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user)=>
                <tr>
                    <td style={{border:"1px solid red"}}>{user.name}</td>
                    <td style={{border:"1px solid red"}}>{user.age}</td>
                    <td style={{border:"1px solid red"}}>{user.dateOfBirth}</td>
                    <td style={{border:"1px solid red"}}>{user.stateOfResidence}</td>
                    <td style={{border:"1px solid red"}}>{user.address}</td>
                    <td style={{border:"1px solid red"}}>{user.pincode}</td>
                </tr>
                )}
            </tbody>
        </table>

    </div>
)
}