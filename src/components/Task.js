import { useState } from "react";
import "../styles/task.scss";

const Task = ({ task, addTask, deleteTask, moveTask }) => {
    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
    const [collapsed, setCollapsed] = useState(task.isCollapsed);
    const [formAction, setFormAction] = useState("");

    const setUrgency = (e) => {
        setUrgencyLevel(e.target.attributes.urgency.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formAction === "save") {
            if (collapsed) {
                setCollapsed(false);
            } else {
                let newTask = {
                    id: task.id,
                    title: e.target.elements.title.value,
                    description: e.target.elements.description.value,
                    urgency: urgencyLevel,
                    status: task.status,
                    isCollapsed: true,
                };

                addTask(newTask);
                setCollapsed(true);
            }
        }

        if (formAction === "delete") {
            deleteTask(task.id);
        }
    };

    const handleMoveLeft = () => {
        let newStatus = "";

        if (task.status === "In Progress") {
            newStatus = "BackLog";
        } else if (task.status === "Done") {
            newStatus = "In Progress";
        }
        if (newStatus !== "") {
            moveTask(task.id, newStatus);
        }
    };

    const handleMoveRight = () => {
        let newStatus = "";

        if (task.status === "BackLog") {
            newStatus = "In Progress";
        } else if (task.status === "In Progress") {
            newStatus = "Done";
        }
        if (newStatus !== "") {
            moveTask(task.id, newStatus);
        }
    };

    return (
        <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
            <button onClick={handleMoveLeft} className="button moveTask">
                &#171;
            </button>
            <form
                onSubmit={handleSubmit}
                className={collapsed ? "collapsed" : ""}
            >
                <input
                    type="text"
                    className="title input"
                    name="title"
                    placeholder="Enter Task"
                    disabled={collapsed}
                    defaultValue={task.title}
                />
                <textarea
                    rows="2"
                    className="description input"
                    name="description"
                    placeholder="Enter Description"
                    defaultValue={task.description}
                />
                <div className="urgencyLables">
                    <label
                        className={`low ${
                            urgencyLevel === "low" ? "selected" : ""
                        }`}
                    >
                        <input
                            urgency="low"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                    </label>
                    <label
                        className={`medium ${
                            urgencyLevel === "medium" ? "selected" : ""
                        }`}
                    >
                        <input
                            urgency="medium"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                    </label>
                    <label
                        className={`high ${
                            urgencyLevel === "high" ? "selected" : ""
                        }`}
                    >
                        <input
                            urgency="high"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                    </label>
                </div>
                <button
                    onClick={() => {
                        setFormAction("save");
                    }}
                    className="button"
                >
                    {collapsed ? "Edit" : "Save"}
                </button>
                {collapsed && (
                    <button
                        onClick={() => {
                            setFormAction("delete");
                        }}
                        className="button delete"
                    >
                        X
                    </button>
                )}
            </form>
            <button onClick={handleMoveRight} className="button moveTask">
                &#187;
            </button>
        </div>
    );
};

export default Task;
