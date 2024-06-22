import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/CounterReducer";
const store = configureStore({
    reducer:{
        counter:counterReducer,
    }

})
export default store
