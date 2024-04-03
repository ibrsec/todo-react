import React, { useState } from "react";
import "./Input.scss";

const Input = ({ inputValue, setInputValue }) => {
  const [inp,setInp] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!inp){

    }else{
      setInputValue(inp.trim());
      setInp("")

    }

  }
  return (
    <form className="d-flex align-items-center justify-content-center gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control   input"
        placeholder="Enter your task..."
        onChange={(e) => setInp(e.target.value)}
        value={inp}
      />
      <button className="btn btn-success text-nowrap">Add Task</button>
    </form>
  );
};

export default Input;
