import React, { useState } from "react";
import { Container, Button, Badge, InputBox } from "./todoList.element";
const TodoList = ({ task, Task, setTask }) => {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState("Edit");
    const clickHandlerInc = (arg) => {
        if (arg === "+") {
            setCount((prevState) => {
                return (prevState = prevState + 1);
            });
        } else {
            setCount((prevState) => {
                return (prevState = prevState - 1);
            });
        }
    };
    const editHandler = () => {
        if (buttonName === "Edit") {
            setButtonName("Save");
        } else setButtonName("Edit");
    };

    const deleteHandler = () => {
        setTask(
            Task.filter((element) => {
                return element._id !== task._id;
            })
        );
    };
    return (
        <React.Fragment>
            <Container>
                <div className="pre-btn-container">
                    <Button onClick={() => clickHandlerInc("+")}>+</Button>
                    <Button
                        onClick={() => clickHandlerInc("-")}
                        disabled={IsDisable()}
                    >
                        -
                    </Button>
                </div>
                <Badge color={getColor()}>{`Person ${getValue()}`}</Badge>
                <InputBox value={task.task} readOnly />
                <div className="post-btn-container">
                    <Button onClick={editHandler} className="btn-edit">
                        {buttonName}
                    </Button>
                    <Button onClick={deleteHandler} className="btn-delete">
                        Delete
                    </Button>
                </div>
            </Container>
        </React.Fragment>
    );
    function getValue() {
        let value = count === 0 ? "Zero" : count;
        return value;
    }
    function getColor() {
        let setColor = count === 0 ? "#ffd001" : "#77b5fe";
        return setColor;
    }
    function IsDisable() {
        let disable = count === 0 ? "activate" : "";
        return disable;
    }
};

export default TodoList;
