
import { legacy_createStore as createStore, combineReducers} from 'redux';


const countReducer= (state = 0, action)=> {
    if(action.type=== 'SUBSTRACT'){
        return state - 5;
    }
    if(action.type=== 'ADD'){
        return state + 5;
    }
    
    if(action.type=== 'ADD_NUMBER'){
        return state + action.payload;
    }
    return state
}



const store = createStore(countReducer)

export default store ;