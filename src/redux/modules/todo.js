import { todos } from "../../shared/todos";

const add_Todo = 'todo/add_Todo'

export const addTodo = (payload) => {
    return {
        type: add_Todo,
        payload: payload,
    }
}

const initialState = {
    todo: todos,    
    // {id: 1, title: '리액트', desc: '리액트 기초 공부', done: false}
    // {id: 2, title: '스프링', desc: '스프링 기초 공부', done: false}
    // {id: 3, title: '노드', desc: '끝났다', done: true}
}
    console.log(initialState.todo)      // 초기값 설정 완료


// 위의 코드와 동일 const [todo, setTodo] = useState("")

// 밑에 있는 부분이 리듀서임
const todo = (state = initialState, action) => {
    switch (action.type) {
        case add_Todo:
            return {
                todo: [...state.todo, action.payload]
            }
        default:
            return state;
    }
}

export default todo;