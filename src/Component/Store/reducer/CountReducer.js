import React from 'react'


 
    
    const countReducer= (state = 0, action)=> {
    if(action.type=== 'SUBSTRACT'){
        return state - 2;
    }
    if(action.type=== 'ADD'){
        return state + 2;
    }
    
    if(action.type=== 'ADD_NUMBER'){
        return state + action.payload;
    }
    return state
}
    
  


export default countReducer