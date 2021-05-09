import React, { useState } from "react";
import { OuterContainer, TaskContainer, ListContainer } from "./Todo.element";
import AddTask from "../../components/addtask/addtask";
import TodoList from "../../components/TodoList/todoList";
const Todo = () => {
    const [Task, setTask] = useState([]);
    return (
        <React.Fragment>
            <OuterContainer>
                <TaskContainer>
                    <AddTask Task={Task} setTask={setTask} />
                </TaskContainer>
                <ListContainer>
                    {Task.map((task) => (
                        <TodoList
                            key={task._id}
                            task={task}
                            Task={Task}
                            setTask={setTask}
                        />
                    ))}
                </ListContainer>
            </OuterContainer>
        </React.Fragment>
    );
};

export default Todo;
