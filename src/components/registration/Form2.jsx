import { Registration } from "../../context/Registration"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

export const Form2=()=>{
    const {name,age,dateOfBirth,dispatch,stateOfResidence,address,pincode,handelSubmit}=useContext(Registration)
    const navigate=useNavigate();
    if(!name ||!age ||!dateOfBirth){
        return <navigate to="registration/one"/>;
    }
    
    
    
    return(
    <div>
        <input type="text" placeholder="State of Residence" value={stateOfResidence} onChange={(e)=>dispatch({type:"CHANGE_STATE_OF_RESIDENCE",payload:e.target.value})
    } />
    <br/>
    <input type="text" placeholder="Enter Address" value={address} onChange={(e)=>dispatch({type:"ADDDRESS",payload:e.target.value})
    } />
    <br/>
    <input type="text" placeholder="Enter pincode" value={pincode}
    onChange={(e)=>dispatch({type:"PINCODE",payload:e.target.value})
    } />
    <br/>
    
    <button disabled={!stateOfResidence && !address && !pincode &&!name &&!age &&!dateOfBirth}
     onClick={handelSubmit}>Submit</button>
    </div>

    )
}