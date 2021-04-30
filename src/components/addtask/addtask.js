import React, { useState } from "react";
import { Container, TodoForm, TodoHeader } from "./addtask.element";
const AddTask = ({ Task, setTask }) => {
    const [inputTask, setInputTask] = useState("");
    const inputHandler = (event) => {
        setInputTask((prevState) => {
            return (prevState = event.target.value);
        });
    };
    const AddTask = (event) => {
        event.preventDefault();
        setTask([...Task, { _id: Math.random(), task: inputTask }]);
        setInputTask("");
    };

    return (
        <React.Fragment>
            <Container>
                <TodoForm>
                    <TodoHeader>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            value={inputTask}
                            autoFocus
                            autoComplete="true"
                            autoCorrect="true"
                            onChange={inputHandler}
                        />
                        <button
                            type="submit"
                            disabled={IsDisable()}
                            onClick={AddTask}
                        >
                            Add Task
                        </button>
                    </TodoHeader>
                </TodoForm>
            </Container>
        </React.Fragment>
    );
    function IsDisable() {
        let disable = inputTask.length === 0 ? "disable" : "";
        return disable;
    }
};

export default AddTask;
