import { Registration } from "../../context/Registration"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

export const Form1=()=>{
    const {name,age,dateOfBirth,dispatch}=useContext(Registration)
    const navigate=useNavigate();
    
    
    
    return(
    <div>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>dispatch({type:"CHANGE_NAME",payload:e.target.value})
    } />
    <br/>
    <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>dispatch({type:"CHANGE_AGE",payload:e.target.value})
    } />
    <br/>
    <input type="date" value={dateOfBirth}
    onChange={(e)=>dispatch({type:"CHANGE_DATE_OF_BIRTH",payload:e.target.value})
    } />
    <br/>
    
    <button disabled={!name && !age && !dateOfBirth} onClick={()=>{
        navigate(`/registration/two`)
    }}>Next</button>
    </div>

    )
}