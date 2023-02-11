import React from "react";
import { Link, useParams } from "react-router-dom";
import { todos } from "../shared/todos";
import { useSelector } from "react-redux";

function Working() {

    const params = useParams();
    console.log(params);

    // useSelector로 가져오기 (리덕스에서 가져오기)
    const data = useSelector((state) => {
        return state.todo.todo;
    })

    const foundTodos = todos.find((item) => {
        return item.id === parseInt(params.id);
    })

    console.log(foundTodos)

    return (
        <div>
            <span>ID : {foundTodos.id}</span>

            <Link to={'/'}><button>이전으로</button></Link>

            <h3>{foundTodos.title}</h3>
            <p>{foundTodos.desc}</p>
        </div>
    )
}

export default Working;