import React from "react";
import { useState } from "react";
import Example1 from "./Example1";

const Task = () => {
  const [task, setTask] = useState([]);

  const handleNoteChange = (event: any) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };

  return (
    <div>
      <form>
        <input value={task} onChange={handleNoteChange} />

        <button type="submit">save</button>
      </form>
      <div>{task}</div>
    </div>
  );
};

export default Task;
