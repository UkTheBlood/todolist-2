import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";


// const rootReducer = combineReducers({
    // 모듈(reducer)들을 가져온다
//     todo,
// });

// const store = createStore(rootReducer);
// reducer의 묶음들 즉 rootReducer

const store = configureStore({
    reducer: {
        todo,
    }
})

export default store;       // 바깥으로 내보내기