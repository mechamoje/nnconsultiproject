import { combineReducers } from "redux"; 
import servicesReducer from "./services/reducer";

const rootReducer = combineReducers({
    servicesReducer 
})

export default rootReducer;