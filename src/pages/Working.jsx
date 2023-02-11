import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from 'styled-components';

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
        <Container>
            <Center>
                <span>ID : {datas.id}</span>

                <Link to={'/'}><button>이전으로</button></Link>

                <h3>{datas.title}</h3>
                <p>{datas.desc}</p>
            </Center>
        </Container>
    )
}

export default Working;

const Container = styled.div`
    width: 1200px;
    margin: auto;
`

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 200px;
    margin: -150px 0px 0px -200px;
    padding: 10px;
    border: 3px solid green;
    border-radius: 10px;
`