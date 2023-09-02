import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Entertaskslice";

function Entertask() {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const handleAddTask = (event) => {
    event.preventDefault();
    dispatch(addTask(name));
  };
  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          onChange={(event) => setname(event.target.value)}
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
