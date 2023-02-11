import React from "react";
import { Link, useParams } from "react-router-dom";
import { todos } from "../shared/todos";
import { useSelector } from "react-redux";

function Working() {

    const params = useParams();
    console.log("params", params);

    // useSelector로 가져오기 (리덕스에서 가져오기)
    const data = useSelector((state) => {
        return state.todo.todo;
    })

    console.log("data", data);

    const datas = data.find((item) => {
        console.log("item", item)
        return String(item.id) === params.id;
    })

    console.log('datas', datas)

    return (
        <div>
            <span>ID : {datas.id}</span>

            <Link to={'/'}><button>이전으로</button></Link>

            <h3>{datas.title}</h3>
            <p>{datas.desc}</p>
        </div>
    )
}

export default Working;