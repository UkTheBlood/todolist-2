import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../shared/todos";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todo: todos,
    isLoading: false,
    isError: false,
    error: null,
}


export const __getTodos = createAsyncThunk(
    "getTodos",
    async (payload, thunkAPI) => {  // 비동기 처리 : async
        try {
            // thunkAPI.fulfillWithValue 혹은 thunkAPI.rejectWithValue로 extraReducers로 보내줌
            const response = await axios.get('http://localhost:4000/todos')
            console.log(response)
            // response -> json에 들어있는 data

            // toolkit에서 제공하는 API
            // Promise -> resolve(=network 요청이 성공한 경우) -> dispatch해주는 기능을 가진 API
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error);
        }

    }
);


const todoSlice = createSlice({
    name: "todos",
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
            state.todo = action.payload
        },
    },
    extraReducers: {        // state는 위의 initialState를 말함
        [__getTodos.pending]: (state, action) => {
            // 아직 통신이 진행중일 때
            state.isLoading = true;
            state.isError = false;
        },

        // __getTodos의 fulfillWithValue로 찾아감
        [__getTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = action.payload
        },
        [__getTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        }
    }
});

export default todoSlice.reducer;

export const { add_Todo, delete_Todo, done_Todo, cancel_Todo } = todoSlice.actions


















































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