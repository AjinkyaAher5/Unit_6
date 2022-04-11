import React, { createContext, useReducer } from "react";


export const Registration=createContext();

const initstate={
    name:"",
    age:"",
    dateOfBirth:"",
    stateOfResidence:"",
    address:"",
    pincode:""

};

function reducer(state,action){
    switch(action.type){
    case "CHANGE_NAME":
    return{...state,name:action.payload};

    case "CHANGE_AGE":
        return{...state,age:action.payload}

    case "CHANGE_DATE_OF_BIRTH":
        return {...state,dateOfBirth:action.payload}

    case "CHANGE_STATE_OF_RESIDENCE":
        return{...state,stateOfResidence:action.payload}
        
     case "ADDDRESS":
     return{...state,address:action.payload} 
     
     case "PINCODE":
    return{...state,pincode:action.payload}

    default:
    throw new Error()


}
}

export function RegistrationProvider({children}){
    const [state,dispatch]=useReducer(reducer,initstate);
    const handelSubmit=()=>{
        fetch(`http://localhost:8000/users`,{
            method:"POST",
            body:JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then(()=>{})
        .catch((error)=>console.log(error));
    };

    const {name,age,dateOfBirth,stateOfResidence,address,pincode}=state;
    return(
        <Registration.Provider value={{
            name,
            age,
            dateOfBirth,
            stateOfResidence,
            address,
            pincode,
            dispatch,
            handelSubmit
        }}>
            {children}

        </Registration.Provider>
    )
}