import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Entertaskslice";

function Entertask() {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const handleAddTask = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    } else {
      dispatch(addTask(name));
    }

    setname("");
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          className=" form-control mt-3 border-primary "
          placeholder="Enter Task in  To Do List"
          value={name}
        />

        <button type="submit" className=" btn btn-primary mt-3 float-right">
          {" "}
          Add Task{" "}
        </button>
      </form>
    </>
  );
}
export default Entertask;
