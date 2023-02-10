import { createStore } from "redux";
import { combineReducers } from "redux";
import title from "../modules/title";
import desc from "../modules/desc";
import todo from "../modules/todo";
// 모듈을 가져오기 (완)


const rootReducer = combineReducers({
    // 모듈(reducer)들을 가져온다
    title,
    desc,
    todo,
});

const store = createStore(rootReducer);
// reducer의 묶음들 즉 rootReducer

export default store;       // 바깥으로 내보내기