const initialState = {
    todo: "",              // todo의 초기값 ""로 선언
}

// 위의 코드와 동일 const [todo, setTodo] = useState("")

// 밑에 있는 부분이 리듀서임
const todo = (state={initialState}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default todo;