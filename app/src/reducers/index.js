import { combineReducers } from 'redux';
import reducer from './reducer';


const rootReducer = combineReducers({items: reducer});

export default rootReducer;
