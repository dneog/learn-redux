import React from 'react'


 
    
    const countReducer= (state = 0, action)=> {
    if(action.type=== 'SUBSTRACT'){
        return state - 1;
    }
    if(action.type=== 'ADD'){
        return state + 1;
    }
    if(action.type=== 'RESET'){
        return state = 0;
    }
    if(action.type=== 'ADD_NUMBER'){
        return state + action.payload;
    }
    return state
}
    
  


export default countReducer