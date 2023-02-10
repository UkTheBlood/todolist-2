import { Link } from 'react-router-dom'
import { useState } from 'react';
import { todos } from '../shared/todos';

function Home() {

    // todo 리스트 초기값
    const [todo, setTodo] = useState(todos);    // []안에 넣으면 이중배열이 됨

    // console.log(todo)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // input에 작성하는 것처럼 렌더링
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    }

    // 추가 버튼
    const addButton = () => {
        const newTodo = {
            id: todo.length + 1,
            title,
            desc,
            done: false,
        }

        setTodo([...todo, newTodo]);
        setTitle('');
        setDesc('');
    }

    // 삭제 버튼
    const deleteButton = (id) => {
        const newTodo = todo.filter(function (todo) {
            return todo.id !== id
        });

        setTodo(newTodo);
    }

    // 완료 버튼
    const doneButton = (id) => {
        setTodo((x) =>
            x.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        )
    }

    // 취소 버튼
    const cancelButton = (id) => {
        setTodo((x) =>
            x.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        )
    }

    return (
        <div className="wrap">
            <div className="header">
                <p>My Todo List</p>
                <p>React</p>
            </div>
            <div className="input-box">
                <div className="input-constents">
                    제목 :
                    <input
                        value={title}
                        onChange={titleChangeHandler}

                    />
                    내용 :
                    <input
                        value={desc}
                        onChange={descChangeHandler}
                    />
                    <button onClick={addButton}>추가하기</button>
                </div>
            </div>
            <div>
                <div className='container'>
                    <div className='container-todo-list'>
                        <h3>Working...</h3>

                        {
                            todo.filter(function (work) {
                                return work.done === false
                            }).map(item => {
                                return (
                                    <div
                                        key={item.id}
                                    >
                                        <Link
                                            key={item.id}
                                            to={`/working/${item.id}`}>상세보기</Link>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <button onClick={() => deleteButton(item.id)}>삭제하기</button>
                                        <button onClick={() => doneButton(item.id)}>완료!</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <br />
                    <br />
                    <br />

                    <div className='container-todo-list'>
                        <h3>Done...</h3>
                        {
                            todo.filter(function (work) {
                                return work.done === true
                            }).map(item => {
                                return (
                                    <div
                                        key={item.id}
                                    >
                                        <Link
                                            key={item.id}
                                            to={`/working/${item.id}`}>상세보기</Link>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <button onClick={() => deleteButton(item.id)}>삭제하기</button>
                                        <button onClick={() => cancelButton(item.id)}>취소!</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
