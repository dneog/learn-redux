
import { legacy_createStore as createStore, combineReducers} from 'redux';
import countReducer from './reducer/CountReducer';




const reducers= combineReducers({
    count: countReducer,
    
})
const store = createStore(reducers)

export default store ;