import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkboxChange, deleteTask } from "../entertask/Entertaskslice";

function List() {
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.todoTasks);
  const [show, setshow] = useState(3);
  const handleCheckboxChange = (id) => {
    dispatch(checkboxChange(id));
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const Completed = Tasks.filter((items) => items.completed);
  const Uncompleted = Tasks.filter((items) => !items.completed);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary ml-3 mt-2"
        onClick={() => setshow(1)}
      >
        {" "}
        Completed Tasks
      </button>
      <button
        type="button"
        className="btn btn-primary ml-3 mt-2"
        onClick={() => setshow(2)}
      >
        {" "}
        UnCompleted Tasks
      </button>
      <button
        type="button"
        className="btn btn-primary ml-3 mt-2"
        onClick={() => setshow(3)}
      >
        {" "}
        All Tasks
      </button>

      {show === 3 &&
        Tasks.map((items) => (
          <ul key={items.id}>
            <li>
              <span>
                {" "}
                {items.name}{" "}
                <span className=" font-weight-bolder">
                  {" "}
                  {items.completed ? "done" : ""}{" "}
                </span>{" "}
              </span>
              <input
                type="checkbox"
                checked={items.completed}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <button
                type="button"
                className="btn btn-danger ml-3"
                onClick={() => handleDeleteTask(items.id)}
              >
                {" "}
                Delete
              </button>
            </li>
          </ul>
        ))}

      {show === 1 &&
        Completed.map((items) => (
          <ul key={items.id}>
            <li>
              <span>
                {" "}
                {items.name}{" "}
                <span className=" font-weight-bolder">
                  {" "}
                  {items.completed ? "done" : ""}{" "}
                </span>{" "}
              </span>
              <input
                type="checkbox"
                checked={items.completed}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <button
                type="button"
                className="btn btn-danger ml-3"
                onClick={() => handleDeleteTask(items.id)}
              >
                {" "}
                Delete
              </button>
            </li>
          </ul>
        ))}
      {show === 2 &&
        Uncompleted.map((items) => (
          <ul key={items.id}>
            <li>
              <span>
                {" "}
                {items.name}{" "}
                <span className=" font-weight-bolder">
                  {" "}
                  {items.completed ? "done" : ""}{" "}
                </span>{" "}
              </span>
              <input
                type="checkbox"
                checked={items.completed}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <button
                type="button"
                className="btn btn-danger ml-3"
                onClick={() => handleDeleteTask(items.id)}
              >
                {" "}
                Delete
              </button>
            </li>
          </ul>
        ))}
    </>
  );
}
export default List;
