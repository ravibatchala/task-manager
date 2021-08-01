import { useEffect, useState } from "react";
import "../styles/App.scss";
import StatusLine from "./StatusLine";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log("using effect");
    }, []);

    const addEmptyTask = (status) => {};

    const addTask = (taskToAdd) => {};

    const deleteTask = (taskId) => {};

    const moveTask = (id, newStatus) => {};

    const saveTasksToLocalStorage = (tasks) => {};

    const loadTasksToLocalStorage = () => {};

    return (
        <div className="App">
            <h1>Task Management</h1>
            <main>
                <section>
                    <StatusLine
                        task={tasks}
                        addEmptyTask={addEmptyTask}
                        addTask={addTask}
                        deleteTask={deleteTask}
                        moveTask={moveTask}
                        status="BackLog"
                    />
                    <StatusLine
                        task={tasks}
                        addEmptyTask={addEmptyTask}
                        addTask={addTask}
                        deleteTask={deleteTask}
                        moveTask={moveTask}
                        status="In Progress"
                    />
                    <StatusLine
                        task={tasks}
                        addEmptyTask={addEmptyTask}
                        addTask={addTask}
                        deleteTask={deleteTask}
                        moveTask={moveTask}
                        status="Done"
                    />
                </section>
            </main>
        </div>
    );
};

export default App;
