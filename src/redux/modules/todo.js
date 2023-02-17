import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../shared/todos";

// const add_Todo = 'todo/add_Todo'
// const delete_Todo = 'todo/delete_Todo'
// const done_Todo = 'todo/done_Todo'
// const cancel_Todo = 'todo/cancel_Todo'

// export const addTodo = (payload) => {
//     return {
//         type: add_Todo,
//         payload: payload,
//     }
// }

// export const deleteTodo = (payload) => {
//     return {
//         type: delete_Todo,
//         payload,
//     }
// }

// export const doneTodo = (payload) => {
//     return {
//         type: done_Todo,
//         payload,
//     }
// }

// export const cancelTodo = (payload) => {
//     return {
//         type: cancel_Todo,
//         payload,
//     }
// }


const initialState = {
    todo: todos,
    // {id: 1, title: '리액트', desc: '리액트 기초 공부', done: false}
    // {id: 2, title: '스프링', desc: '스프링 기초 공부', done: false}
    // {id: 3, title: '노드', desc: '끝났다', done: true}
}
console.log(initialState.todo)      // 초기값 설정 완료


// 위의 코드와 동일 const [todo, setTodo] = useState("")

// 밑에 있는 부분이 리듀서임
// const todo = (state = initialState, action) => {
//     switch (action.type) {
//         case add_Todo:
//             return {
//                 todo: [...state.todo, action.payload]
//             }
//         case delete_Todo:
//             return {
//                 todo: action.payload
//             }
//         case done_Todo:
//             return {
//                 todo: action.payload
//             }
//         case cancel_Todo:
//             return {
//                 todo: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default todo;

const todoSlice = createSlice({
    name: todos,
    initialState: initialState,
    reducers: {
        add_Todo: (state, action) => {
            state.todo = [...state.todo, action.payload]
        },
        delete_Todo: (state, action) => {
            state.todo = action.payload
        },
        done_Todo: (state, action) => {
            state.todo = action.payload
        },
        cancel_Todo: (state, action) => {
            state.todo =  action.payload
        },
    }
});

export default todoSlice.reducer;

export const {add_Todo, delete_Todo, done_Todo, cancel_Todo} = todoSlice.actions