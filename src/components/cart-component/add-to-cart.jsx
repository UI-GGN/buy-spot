import React  from "react";
import { useReducer } from "react";
import './add-to-cart.css'

const initialstate=1;
console.log(initialstate)

const reducer = (state,action) => {
  console.log(state);
  if(action.type == "ADDTOCART")
  {
    return state+1;
  }
  if(action.type == "REMOVEFROMCART")
  {
    return state-1;
  }
  return state;
}

export const UseReducer = () =>{

  const [ state, dispatch]= useReducer(reducer, initialstate);
  return(
    <div>    
  <button className="buttonAdd" onClick={()=> dispatch({type:"ADDTOCART"})} > + </button> 
  <h2 className="state">{state}</h2>
  <button className="buttonDel" onClick={()=> dispatch({type:"REMOVEFROMCART"})} > - </button> 
      
    </div>
  )
}