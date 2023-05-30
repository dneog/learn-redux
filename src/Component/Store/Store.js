
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

const authReducer= (state= true, action)=> {
    if(action.type=== 'TOGGLE'){
        return state= !state
    }
    return state
}

const reducers= combineReducers({
    count: countReducer,
    isLoggedIn: authReducer
})

const store = createStore(reducers)

export default store ;