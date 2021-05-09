import React, { useState } from "react";
import { Container, Button, Badge, InputBox } from "./todoList.element";
const TodoList = ({ task, Task, setTask }) => {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState("Edit");
    const [InputTask, setInputTask] = useState("");
    const [activate, setActivate] = useState(true);
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
            setActivate(false);
        } else {
            setButtonName("Edit");
            setActivate(true);
            updateHandler();
        }
    };
    const getNewInput = (event) => {
        setInputTask((prevState) => {
            return (prevState = event.target.value);
        });
    };
    const updateHandler = () => {
        for (var i in Task) {
            if (Task[i]._id === task._id) {
                Task[i].task = InputTask;
                break; //Stop this loop, we found it!
            }
        }
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

                <InputBox
                    defaultValue={task.task}
                    onChange={getNewInput}
                    readOnly={activate}
                />
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
