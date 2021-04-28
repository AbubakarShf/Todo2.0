import React from "react";
import { Container, TodoForm, TodoHeader, ListHere } from "./Todo.element";
const Todo = () => {
    return (
        <React.Fragment>
            <Container>
                <TodoForm>
                    <TodoHeader>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            autoFocus
                            autoComplete
                            autoCorrect
                        />
                        <button type="submit">Add Task</button>
                    </TodoHeader>
                    <ListHere></ListHere>
                </TodoForm>
            </Container>
        </React.Fragment>
    );
};

export default Todo;
