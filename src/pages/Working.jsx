import React from "react";
import { Link, useParams } from "react-router-dom";
import { todos } from "../shared/todos";

function Working() {

    const params = useParams();

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