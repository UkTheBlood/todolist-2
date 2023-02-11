// const initialState = {
//     title: "",              // title의 초기값 ""로 선언
// }

// // 위의 코드와 동일 const [title, setTitle] = useState("")

// // 밑에 있는 부분이 리듀서임
// const title = (state={initialState}, action) => {
//     switch(action.type) {
//         case CHANGE_HANDLER:
//             return {
//                 title: event.target.value   
//                 // event.target.value를 어떻게 가져올지 생각보기
//             }
//         default:
//             return state;
//     }
// }

// export default title;